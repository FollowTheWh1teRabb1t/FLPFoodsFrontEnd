import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/services/api'; // ← aqui
import { Container, Form, Input, Button, Title, BackButton } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '@/context/authContext';  
import leavesLogin1 from '@/assets/leavesLogin1.png';
import leavesLogin2 from '@/assets/leavesLogin2.png';
import leavesLogin3 from '@/assets/leavesLogin3.png';
import leavesLogin4 from '@/assets/leavesLogin4.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('E-mail e senha são obrigatórios.');
            return;
        }

        try {
            const response = await api.post("/api/auth/login", {
                email,
                password
            });

            const { token, role } = response.data;

            if (!token || !role) {
                setError('Resposta inválida do servidor.');
                return;
            }

            login(token, role);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // opcional

            navigate('/');
        } catch (error: unknown) {
            if (error && typeof error === "object" && "response" in error) {
                const err = error as any;
                setError(err.response?.data?.error || 'Erro ao fazer login.');
            } else {
                setError('Erro desconhecido.');
            }
        }
    };

    return (
        <Container>
            <BackButton onClick={() => navigate('/')}>
                <FiArrowLeft size={24} />
            </BackButton>

            <img className='leaves1' src={leavesLogin1} alt="Leaves" />
            <img className='leaves3' src={leavesLogin3} alt="Leaves" />
            <Title>Login</Title>

            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

            <Form onSubmit={handleSubmit}>
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
                <Button type="submit">Entrar</Button>
            </Form>

            <img className='leaves2' src={leavesLogin2} alt="Leaves with strawberry" />
            <img className='leaves4' src={leavesLogin4} alt="Leaves" />
        </Container>
    );
}
