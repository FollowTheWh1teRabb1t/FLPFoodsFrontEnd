import styled from 'styled-components';

interface ButtonProps {
    color?: string
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '16px 32px';
      default:
        return '12px 24px';
    }
  }};
 background-color: ${(props) => props.backgroundColor || 'blue'};
 color: ${(props) => props.color || 'white'};
 border: none;
 border-radius: 5px;
 font-size: 1rem;
 cursor: pointer;
 transition: all 0.3s ease;

 &:hover {
    opacity: 0.8;
 }

 &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
 }
`