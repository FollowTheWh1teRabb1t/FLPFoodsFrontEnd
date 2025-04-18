import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/services/api'; // ← aqui
import { Container, Form, Input, Button, Title, BackButton } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import leavesCreate1 from '@/assets/leavesCreate1.png';
import leavesCreate2 from '@/assets/leavesCreate2.png';
import leavesCreate3 from '@/assets/leavesCreate3.png';
import leavesCreate4 from '@/assets/leavesCreate4.png';

export default function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();         

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        try {
            await api.post("/api/auth/register", {
                name,
                email,
                password,
                confirmPassword
            });
            navigate('/login');
        } catch (error: unknown) {
            if (error && typeof error === "object" && "response" in error) {
                const err = error as any;
                setError(err.response?.data?.error || 'Erro ao cadastrar');
            } else {
                setError('Erro desconhecido');
            }
        }
    };

    return (
        <Container>
            <BackButton onClick={() => navigate('/')}>
                <FiArrowLeft size={24} />
            </BackButton>

            <img className='leaves1' src={leavesCreate1} alt="Leaves" />
            <img className='leaves3' src={leavesCreate3} alt="Leaves" />
            <Title>Criar Conta</Title>

            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <Button type="submit">Criar Conta</Button>
            </Form>

            <img className='leaves2' src={leavesCreate2} alt="Leaves with strawberry" />
            <img className='leaves4' src={leavesCreate4} alt="Leaves" />
        </Container>
    );
}
    