import styled from 'styled-components';
import backgroundHome from '@/assets/backgroundHome.jpg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;

  /* ====== Box Presentation ====== */
  .boxPresentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12.5rem;
    font-size: 2.2rem;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    > .twoLeaves {
      width: 150px;
      position: absolute;
      left: 35%;
      bottom: -122%;
    }

    > .cornerLeavesThree {
      position: absolute;
      width: 300px;
      left: 0;
      top: 0;
    }

    > .powderImg {
      position: absolute;
      width: 300px;
      right: 5%;
      bottom: -50px;
    }
  }

  /* ====== Dish Presentation ====== */
  .boxDishPresentation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15.5rem;
    font-family: 'Merriweather', sans-serif;
    position: relative;

    > h2 {
      font-size: 3.5rem;
    }

    .lambImg {
      width: 31.25rem;
      padding: 1.25rem;
    }

    .cornerLeaves,
    .cornerLeavesTwo {
      width: 200px;
      position: absolute;
      bottom: -40px;
    }

    .cornerLeaves {
      left: 0;
    }

    .cornerLeavesTwo {
      right: 0;
    }
  }

  /* ====== Menu Box ====== */
  .boxMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15.5rem;
    font-family: 'Merriweather', sans-serif;
    position: relative;

    h2 {
      font-size: 2.5rem;
    }

    .dishesArea,
    .beverageArea {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.25rem;
    }

    .beverageArea {
      margin-top: 2rem;

      .explosionImg,
      .flyingLeaves {
        position: absolute;
        width: 200px;
        display: none;
      }

      .explosionImg {
        left: 4%;
        top: 0;
      }

      .flyingLeaves {
        right: 5%;
        top: 0;
      }
    }
  }

  /* ====== Services Box ====== */
  .servicesBox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15.5rem;
    font-family: 'Merriweather', sans-serif;
    position: relative;

    > h2 {
      font-size: 3.5rem;
      text-align: center;
    }

    > p {
      font-size: 1.2rem;
      margin: 0 2rem;
      text-align: center;
    }

    .goldenFlower {
      width: 300px;
      position: absolute;
      left: 7%;
      top: -60px;
    }

    .boxSquares {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 5rem;
      gap: 2.5rem;

      > p {
        border: 1px solid #fff;
        padding: 0.625rem;
        font-size: 1.5rem;
      }
    }
  }

  /* ====== Reviews Box ====== */
  .boxReviews {
    width: 90%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 20px;
    margin: 15.5rem auto 22.7rem;
    font-family: 'Merriweather';
    position: relative;

    > h2 {
      font-size: 2.5rem;
    }

    .whiteFlowers {
      position: absolute;
      width: 200px;
      right: 0;
      bottom: -100px;
    }

    .rosePetal {
      position: absolute;
      width: 250px;
      left: 0;
      bottom: -100px;
    }
  }

  .cardReview {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #222;
    border-radius: 1.25rem;

    .arrowBtn {
      background-color: yellow;
      font-size: 2rem;
      font-weight: bold;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      padding: 8px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .textArea {
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem;

    .nameClient {
      color: yellow;
    }
  }

  .imageArea {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60%;
      height: auto;
    }
  }

  /* ====== Media Queries ====== */

  @media (max-width: 1440px) {
    .boxPresentation .twoLeaves {
      top: 90%;
    }

    .boxReviews {
      .rosePetal {
        left: -20%;
      }

      .whiteFlowers {
        right: -20%;
      }
    }
  }

  @media (max-width: 1024px) {
    .boxPresentation {
      font-size: 1.8rem;

      > .twoLeaves {
        width: 120px;
        bottom: -40px;
        left: 30%;
      }

      > .cornerLeavesThree {
        width: 200px;
      }

      > .powderImg {
        width: 200px;
        right: 4%;
      }
    }

    .boxDishPresentation > h2 {
      font-size: 2.5rem;
    }

    .lambImg {
      width: 22rem;
    }

    .cornerLeaves,
    .cornerLeavesTwo {
      width: 150px;
    }

    .boxMenu h2 {
      font-size: 2rem;
    }

    .servicesBox > h2 {
      font-size: 2.5rem;
    }

    .servicesBox > p {
      font-size: 1rem;
    }

    .servicesBox {
      .goldenFlower {
      width: 150px;
      top: 8%;
      left: 4%;
    }
    }

    .boxSquares > p {
      font-size: 1.2rem;
    }

    .boxReviews > h2 {
      font-size: 2rem;
    }

    .textArea {
      font-size: 1.2rem;
    }

    .boxReviews {
      .rosePetal {
        left: -5%;
        top: 90%;
      }

      .whiteFlowers {
        right: -5%;
        top: 98%;
      }
    }
  }

  @media (max-width: 768px) {
    .boxPresentation > h1 {
      font-size: 2.6rem;
    }

    .twoLeaves {
      width: 80px;
      left: 32%;
    }

    .cornerLeavesThree {
      width: 150px;
    }

    .powderImg {
      right: 1%;
      width: 180px;
    }

    .boxDishPresentation > h2 {
      font-size: 2.2rem;
    }

    .servicesBox .goldenFlower {
      top: 1%;
      width: 100px;
    }
  }

  @media (max-width: 600px) {
    .boxPresentation {
      font-size: 1.2rem;

      > .twoLeaves {
        width: 80px;
      }

      > .cornerLeavesThree {
        width: 100px;
      }

      > .powderImg {
        width: 100px;
        top: 10%;
      }
    }

    .boxDishPresentation > h2 {
      font-size: 1.2rem;
    }

    .cornerLeaves,
    .cornerLeavesTwo {
      top: 40%;
    }

    .lambImg {
      width: 18rem;
    }

    .boxMenu h2 {
      font-size: 1.5rem;
    }

    .servicesBox > h2 {
      font-size: 2rem;
    }

    .servicesBox > p {
      font-size: 0.9rem;
    }

    .boxSquares {
      width: 100%;
    }

    .cardReview .arrowBtn {
      font-size: 1.5rem;
    }

    .textArea {
      font-size: 1rem;
    }

    .rosePetal,
    .whiteFlowers {
      width: 150px;
    }

    .servicesBox .goldenFlower {
      width: 80px;
    }
  }

  @media (max-width: 425px) {

    .boxDishPresentation {
      .lambImg {
        width: 200px;
      } 
    }

    .boxPresentation > h1 {
      font-size: 1.5rem;
    }

    .cornerLeavesThree {
      width: 70px;
    }

    .powderImg {
      width: 70px;
    }

    .boxDishPresentation {
      text-align: center;

      > .cornerLeavesTwo,
      > .cornerLeaves {
        top: 95%;
        width: 90px;
      }

      >.cornerLeavesTwo {
        right: 5%;
      }
      >.cornerLeaves {
        left: 5%;
      }
    }

    .servicesBox .goldenFlower {
      width: 40px;
    }

    .servicesBox {
      .boxSquares p {
      padding: 4px;
      font-size: 0.5rem;
    }
    }
  }

  @media (max-width: 375px) {
    .boxPresentation {
      > .powderImg {
        width: 60px;
      }

      > .cornerLeavesThree {
        width: 60px;
      }
    }


    .boxDishPresentation {
      > .cornerLeavesTwo,
      > .cornerLeaves {
        top: 95%;
        width: 50px;
      }
    }

    .servicesBox .goldenFlower {
      width: 40px;
      left: 1%;
    }

    .servicesBox {
        .boxSquares p {
          padding: 3px;
          font-size: 0.4rem;
        }
    }
  }

  @media (max-width: 320px) {
    .boxPresentation {
      > .powderImg {
        width: 40px;
      }

      > .cornerLeavesThree {
        width: 40px;
      }
    }

    .servicesBox .goldenFlower {
      display: none;
    }

    .servicesBox {
      .boxSquares p {
        font-size: 0.3rem;
      }
    }
  }
`;
