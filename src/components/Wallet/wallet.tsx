import { FaWallet } from "react-icons/fa";
import { WalletContainer } from './styles';
import { useWallet } from "@/context/walletContext"; // Importa o contexto

export default function Wallet() {
  const { balance, addFunds, removeFunds } = useWallet();   

  return (
    <WalletContainer>
      <div className="walletHeader">
        <FaWallet size={28} />
        <h3>My Wallet</h3>
      </div>
      <div className="walletContent">
        <p>Saldo: R$ {balance.toFixed(2)}</p>
        <div className="walletButtons">
          <button onClick={() => addFunds(100)} className="walletButton">
            Adicionar R$ 100
          </button>
          <button onClick={() => removeFunds(100)} className="walletButton">
            Remover R$ 100
          </button>
        </div>
      </div>
    </WalletContainer>
  );
}
