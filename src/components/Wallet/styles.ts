import styled from "styled-components";

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 350px;
  height: 200px;
  position: absolute;

  top: 70%;
  right: 2%;
  z-index: 1000;
  border-radius: 16px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  .walletHeader {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bolder;
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
  }

  .walletContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    margin-bottom: 10px;

    p {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .walletButtons {
    display: flex;
    gap: 10px;
  }

  .walletButton {
    background-color: #FFCC00;
    padding: 0.7rem;
    border-radius: 8px;
    font-weight: bolder;
    color: black;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #FFB800;
    }
  }

  @media (max-width: 768px) {
    width: 40%;
    height: 60%;
    top: 90%;
    bottom: 20px;
    right: 55%;
    padding: 16px;

    .walletHeader {
      font-size: 16px;
    }

    .walletContent p {
      font-size: 12px;
    }

    .walletButton {
      font-size: 10px;
      padding: 0.5rem 0.8rem;
    }
  }
`;
