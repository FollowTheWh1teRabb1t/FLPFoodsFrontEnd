import { createContext, useState, useContext, ReactNode } from "react";
import { Mesa } from "@/data/tablesData";
import axios from "axios";

// Tipagem do contexto
interface MesasContextType {
  mesas: Mesa[];
  setMesas: React.Dispatch<React.SetStateAction<Mesa[]>>; 
  fetchMesasDisponiveis: (data: string, horario: string) => Promise<void>;
}

const MesasContext = createContext<MesasContextType | undefined>(undefined);

// Hook customizado para usar o contexto
export function useMesas() {
  const context = useContext(MesasContext);
  if (!context) {
    throw new Error("useMesas must be used within a MesasProvider");
  }
  return context;
}

interface MesasProviderProps {
  children: ReactNode;
}

export function MesasProvider({ children }: MesasProviderProps) {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  // Função para buscar mesas disponíveis no backend
  const fetchMesasDisponiveis = async (data: string, horario: string) => {
    try {
      const response = await axios.get(`http://localhost:3333/mesas`, {
        params: { data, horario },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      console.log("Mesas retornadas pelo backend:", response.data); 

      setMesas(response.data);
    } catch (error) {
      console.error("Erro ao buscar mesas disponíveis:", error);
    } 
  };

  return (
    <MesasContext.Provider value={{ mesas, setMesas, fetchMesasDisponiveis }}>
      {children}
    </MesasContext.Provider>
  );
}
