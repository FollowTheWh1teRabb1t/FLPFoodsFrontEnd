import { useState } from 'react';
import { useMesas } from '@/context/tableContext';
import { Container, MesaGrid, MesaContainer, FiltroContainer, ModalReserva } from './styles';
import { Mesa } from '@/data/tablesData';
import Header from '@/components/Header/header';
import axios from 'axios';
import { useAuth } from '@/context/authContext';
import leavesTables from '@/assets/leavesTables.png';
import flower from '@/assets/flower.png';

export default function MesasComponent() {
  const { mesas, fetchMesasDisponiveis } = useMesas();
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const { token } = useAuth();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mesaSelecionada, setMesaSelecionada] = useState<number | null>(null);

  const handleBuscar = () => {
    if (!data || !horario) {
      alert("Preencha data e horário");
      return;
    }
    fetchMesasDisponiveis(data, horario);
  };

  const handleConfirmarReserva = async () => {
    if (!nome || !telefone || !mesaSelecionada) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await axios.post(
        'http://localhost:3333/reservas',
        {
          mesaId: mesaSelecionada,
          data,
          horario,
          nome,
          telefone
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Reserva realizada com sucesso!');
      setMesaSelecionada(null);
      setNome('');
      setTelefone('');
      fetchMesasDisponiveis(data, horario);
    } catch (error: any) {
      alert(error.response?.data?.error || 'Erro ao realizar reserva');
    }
  };

  return (
    <Container>
      <Header />

      <FiltroContainer>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        <select value={horario} onChange={(e) => setHorario(e.target.value)}>
          <option value="">Escolha um horário</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>
        <button onClick={handleBuscar}>Buscar Mesas</button>
      </FiltroContainer>

      <MesaGrid>
        {mesas.map((mesa: Mesa) => (
          <MesaContainer key={mesa.id} status="disponível">
            <p>Mesa {mesa.id}</p>
            <p>✅ Disponível</p>
            <button onClick={() => setMesaSelecionada(mesa.id)}>Reservar</button>
          </MesaContainer>
        ))}
      </MesaGrid>

      {mesaSelecionada && (
  <ModalReserva>
    <div className="content">
      <h3>Reserva para Mesa {mesaSelecionada}</h3>
      <input
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        placeholder="Telefone para contato"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button onClick={handleConfirmarReserva}>Confirmar</button>
      <button onClick={() => setMesaSelecionada(null)}>Cancelar</button>
    </div>
  </ModalReserva>
)}


      <img className='leavesTables' src={leavesTables} alt="leaves" />

      <img className='flower' src={flower} alt="flower" />
      
    </Container>
  );
}
