import styled from 'styled-components';
import backgroundHome from '@/assets/backgroundHome.jpg';

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  z-index: 1;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #0072ff;
  }

  &::placeholder {
    color: #888;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: yellow; 
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundHome});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  > .leaves1, .leaves2, .leaves3, .leaves4 {
    position: fixed;
    width: 250px;
    opacity: 0.7;
    z-index: 0;
    pointer-events: none;
  }

  > .leaves1 {
    top: 0;
    right: 0;
  }

  > .leaves2 {
    bottom: 0;
    left: 0;
  }

  > .leaves3 {
    top: 0;
    left: 0;
  }

  > .leaves4 {
    width: 100px;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    > .leaves1, .leaves2, .leaves3, .leaves4 {
      width: 150px;
    }

    > .leaves4 {
      width: 60px;
    }

    ${Title} {
      font-size: 2rem;
      text-align: center;
    }

    ${Form} {
      padding: 1.5rem;
      max-width: 90%;
    }

    ${Input} {
      padding: 0.8rem;
      font-size: 0.95rem;
    }

    ${Button} {
      padding: 0.8rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    > .leaves1, .leaves2, .leaves3, .leaves4 {
      width: 100px;
    }

    > .leaves4 {
      width: 50px;
    }

    ${Title} {
      font-size: 1.6rem;
    }

    ${Form} {
      padding: 1rem;
    }

    ${Input} {
      font-size: 0.9rem;
    }

    ${Button} {
      font-size: 0.95rem;
    }
  }
`;

export const BackButton = styled.button`    
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: red;

  &:hover {
    opacity: 0.9;
  }
`;

export const SmallText = styled.p`
  color: #888;
  text-align: center;
  margin-top: 1rem;
`;

export const Link = styled.a`
  color: #0072ff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
