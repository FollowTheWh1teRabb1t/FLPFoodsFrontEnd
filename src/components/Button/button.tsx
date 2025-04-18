import { StyledButton } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void; // ✅ Garantindo que onClick é aceito
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  backgroundColor,
  size = 'medium',
  onClick, // ✅ Adicionando onClick corretamente
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      onClick={onClick} // ✅ Passando onClick corretamente
    >
      {title}
    </StyledButton>
  );
};

export default Button;
