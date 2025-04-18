import styled from 'styled-components';
import backgroundHome from '@/assets/backgroundHome.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;  
  background-image: url(${backgroundHome});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  .leavesTables {
    width: 300px;
    position: absolute;
    right: 0.5%;
    bottom: 0.5%;
    z-index: 0;
  }

  .table {
    width: 300px;
    position: absolute;
    bottom: 0.2%;
    z-index: 0;
  }

  .flower {
    width: 250px;
    position: absolute;
    bottom: 0.2%;
    left: 0.5%;
    z-index: 0;
  }

  @media (max-width: 768px) {
    .leavesTables,
    .table,
    .flower {
      width: 100px;
    }

    .leavesTables {
      right: 1%;
      bottom: 1%;
    }

    .flower {
      left: 1%;
      bottom: 1%;
    }

    .table {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .leavesTables,
    .table,
    .flower {
      width: 100px;
    }
  }
`;


export const FiltroContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 90%;

  input,
  select {
    padding: 0.7rem;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    outline: none;
    min-width: 150px;
  }

  button {
    padding: 0.7rem 1.5rem;
    background-color: #ffc107;
    color: #333;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #e0a800;
    }
  }
`;


export const MesaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 40%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;



export const MesaContainer = styled.div<{ status: "disponível" | "reservada" }>`
  background-color: ${(props) => (props.status === "disponível" ? "#28a745" : "#dc3545")};
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.status === "disponível" ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.status === "disponível" ? 1 : 0.6)};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: ${(props) => (props.status === "disponível" ? "translateY(-5px)" : "none")};
    box-shadow: ${(props) =>
      props.status === "disponível"
        ? "0px 6px 15px rgba(0, 0, 0, 0.15)"
        : "0px 4px 10px rgba(0, 0, 0, 0.1)"};
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
    text-align: center;
  }

  button {
    width: 100%;
    background-color: yellow;
    border-radius: 10%;
    border: none;
    color: #333;
    transition: transform 0.3 ease-in-out

    
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export const MesaInfo = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;



export const ModalReserva = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .content {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 5px 15px rgba(0,0,0, 0.3);
    animation:  fadeIn 0.3 ease-in-out;
  }

  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:first-of-type {
    background-color: #28a745;
    color: white;

    &:hover {
      background-color: #218838;
    }
  }

  button:last-of-type {
    background-color:   #dc3545;
    color: white;
    
    &hover {
      background-color: #c82333;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`