import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #333;
  width: 350px;
  height: 500px;
  position: absolute;
  top: 70%;
  left: 50%;
  z-index: 1000;
  border-radius: 16px;
  font-family: 'Montserrat', sans-serif;
  overflow-y: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  .confirm {
    border: none;
    width: 100%;
    cursor: pointer;
    transition: 0.3s ease;
  }


  h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    color: #ccc;
    text-align: center;
  }

  .cartItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #444;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    > img {
      width: 80px;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .boxOptions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    width: 100%;
    
    .infoProduct {
      font-size: 14px;
      color: white;
      margin-bottom: 5px;
    }

    > button {
      background-color: #FFCC00;
      padding: 0.5rem;
      border-radius: 4px;
      font-weight: bolder;
      color: black;
      border: none;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #FFB800;
      }
    }
  }

  .clearCart {
    background-color: #D32F2F;
    padding: 0.7rem;
    font-weight: bolder;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    transition:  0.3s ease;

    &:hover {
      background-color: #C2185B;
    }
  }

  @media (max-width: 1024px) {
    left: 2%;
  }

  @media (max-width: 768px) {
    width: 40%;
    height: 90%;
    padding: 16px;
    top: 90%;
    left: 56%;

    .cartItem {
      flex-direction: column;
      align-items: center;
      text-align: center;

      > img {
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
      }
    }

    .boxOptions {
      align-items: center;

      .infoProduct {
        font-size: 13px;
      }

      > button {
        width: 100%;
        font-size: 10px;
      }
    }

    h2 {
      font-size: 16px;
    }

    .clearCart, .confirm {
      font-size: 10px;
      padding: 0.5rem;
    }
  }


  .message {
    background-color: #222;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    margin: 15px 0;
    font-weight: bold;
    text-align: center;
    width: 100%;
    border: 1px solid #555;
  }
`;