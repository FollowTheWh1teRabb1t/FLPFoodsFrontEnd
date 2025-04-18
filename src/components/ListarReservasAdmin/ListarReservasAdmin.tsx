import { useEffect, useState } from 'react';
import axios from 'axios';
import { ReservaCard }  from './styles'

interface Reserva {
  id: number;
  nome: string;
  telefone: string;
  data: string;
  horario: string;
  mesa?: {
    id: number;
    nome: string;
  };
  usuario?: {
    id: number;
    name: string;
    email: string;
  };
}

export const ListaReservasAdmin = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get<Reserva[]>('http://localhost:3333/reservas/admin', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReservas(response.data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <ReservaCard>
      <h2>Lista de Reservas</h2>
      {Array.isArray(reservas) && reservas.map(reserva => (
        <div key={reserva.id} className="reserva-card">
          <p><strong>Nome:</strong> {reserva.nome}</p>
          <p><strong>Telefone:</strong> {reserva.telefone}</p>
          <p><strong>Data:</strong> {reserva.data}</p>
          <p><strong>Horário:</strong> {reserva.horario}</p>
          <p><strong>Mesa:</strong> {reserva.mesa?.nome || 'Mesa não informada'}</p>
        </div>
      ))}
    </ReservaCard>
  );
};
