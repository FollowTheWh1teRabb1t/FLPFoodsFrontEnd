import { Container } from './styles';
import { useCart } from '@/context/cartContext';

interface CardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

export default function Card({ id, image, name, price }: CardProps) {
  const { addToCart } = useCart();

  return (
    <Container>
      <div className='boxInfo'>
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>  
      <div className='boxPrice'>
        <p>${price}</p>
        <button className='incrementButton' onClick={() => addToCart({ id, image, name, price, quantity: 1 })}>
          +
        </button>
      </div>   
    </Container>
  );
}
