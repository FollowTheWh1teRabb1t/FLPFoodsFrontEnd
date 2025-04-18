import React, { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  balance: number;
  addFunds: (amount: number) => void;
  removeFunds: (amount: number) => void;
}

interface WalletProviderProps {
  children: ReactNode;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState<number>(250);

  const addFunds = (amount: number) => setBalance((prev) => prev + amount);
  
  const removeFunds = (amount: number) => setBalance((prev) => Math.max(prev - amount, 0));

  return (
    <WalletContext.Provider value={{ balance, addFunds, removeFunds }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
