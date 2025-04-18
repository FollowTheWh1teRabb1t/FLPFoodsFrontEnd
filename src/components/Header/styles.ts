import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 12.5rem;
  color: #fff;
  position: relative;
  padding: 1rem;

  .boxTitle {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;

    > img {
      position: absolute;
      top: 22%;
      left: 3%;
      width: 120px;
      height: auto;
      z-index: 1000;
    }

    > h1 {
      font-size: 2rem;
    }
  }

  .boxOptions {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;

    > p {
      cursor: pointer;
      transition: transform 0.3s ease, color 0.3s ease;
    }

    p:hover {
      transform: scale(1.1);
      color: #ff9f00;
    }
  }

  .boxCart {
    display: flex;
    gap: 1.25rem;
    align-items: center;

    > p {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
    padding: 2rem 1rem;

    .boxTitle {
      justify-content: center;
      > img {
        top: 1rem;
        left: 40%;
        width: 80px;
      }

      > h1 {
        font-size: 1.8rem;
      }
    }

    .boxOptions {
      flex-wrap: wrap;
      justify-content: center;
      font-size: 1.2rem;
      gap: 1rem;
    }

    .boxCart {
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;

      > p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 600px) {
    .boxTitle > img {
      width: 70px;
      position: absolute;
      left: 34%;
    }

    .boxOptions {
      font-size: 1rem;
      gap: 0.75rem;
    }

    .boxCart {
      > p {
        font-size: 1.8rem;
      }
    }
  }
`;
