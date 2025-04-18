import { useCart } from "@/context/cartContext";
import { useState } from "react";
import { Container } from "./styles";
import { useWallet } from "@/context/walletContext"; // Contexto da carteira

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const { balance, removeFunds } = useWallet(); // Acessando o saldo e a função de remover fundos
  const [message, setMessage] = useState<string>("");

  const handlePayment = () => {
    if (total > balance) {
      setMessage("Saldo insuficiente!");
      return;
    }

    removeFunds(total); // Deduz o valor total da carteira
    clearCart(); // Limpa o carrinho após o pagamento
    setMessage("Pagamento realizado com sucesso!");
  };

  return (
    <Container>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cartItem">
              <img src={item.image} alt={item.name} />
              <div className="boxOptions">
                <p className="infoProduct">
                  {item.name} - ${item.price} x {item.quantity}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <p>Total: R$ {total.toFixed(2)}</p>
          <button className="confirm" onClick={handlePayment} style={{color: "#fff", background: 'green', padding: '0.5rem', fontWeight: 'bold', borderRadius: "4px "}}>
            Confirmar Pagamento
          </button>
          {message && <p>{message}</p>}
          <button className="clearCart" style={{ background: 'red', padding: '0.3rem', fontWeight: 'bolder' }} onClick={clearCart}>
            Limpar Carrinho
          </button>
        </>
      )}
    </Container>
  );
}
