import styled from 'styled-components';
import backgroundHome from '@/assets/backgroundHome.jpg';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundHome});
  padding: 2rem;

  > .leaves1 {
    position: absolute;
    top: -1%;
    left: 1%;
    width: 300px;
  }

  > .leaves2 {
    position: absolute;
    top: 78%;
    right: 0.2%;
    width: 300px;
  }

  > .leaves3 {
    position: absolute;
    top: 1%;
    right: 0.2%;
    width: 300px;
  }

  > .leaves4 {
    position: absolute;
    width: 300px;
    left: 0.2%;
    bottom: 0.2%;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    > .leaves1, > .leaves2, > .leaves3, > .leaves4 {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    > .leaves1, > .leaves2, > .leaves3, > .leaves4 {
      width: 150px;
    }

  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
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

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 300px;
  }
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

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
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
  border: none;
  border-radius: 5px;   
  cursor: pointer;
  transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }

  @media (max-width: 768px) {
    padding: 0.9rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;
