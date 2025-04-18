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
      bottom: -122%;;
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

    .cornerLeaves {
      width: 200px;
      position: absolute;
      left: 0;
      bottom: -40px;
    }

    .cornerLeavesTwo {
      width: 200px;
      position: absolute;
      right: 0;
      bottom: -40px;
    }
  }

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

    .dishesArea {
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .beverageArea {
      display: flex;
      flex-direction: row;
      gap: 1.25rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      justify-content: center;

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

  .boxReviews {
    width: 90%;
    max-width: 1024px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    margin: 15.5rem auto 22.7rem;
    font-family: 'Merriweather';
    position: relative;

    > h2 {
      font-size: 2.5rem;
    }

    .whiteFlowers,
    .rosePetal {
      position: absolute;
      width: 200px;
    }

    .whiteFlowers {
      right: 0;
      bottom: -100px;
    }

    .rosePetal {
      left: 0;
      bottom: -100px;
      width: 250px;
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



  @media (max-width: 1440px) {
    
    
    .boxPresentation {
        position: relative;
        .twoLeaves {
            top: 90%;
        }
    }

    .boxReviews {
        position: relative;

        .rosePetal {    
            left: -20%;    
        }

        .whiteFlowers {
            right:  -20%;
        }
    }
  }

  @media (max-width: 1024px) {

    .servicesBox {
        position: relative;
        .goldenFlower {
            width: 150px;
            top: 8%;
            left: 4%;
        }
    }

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

    .boxDishPresentation {
      > h2 {
        font-size: 2.5rem;
      }

      .lambImg {
        width: 22rem;
      }

      .cornerLeaves,
      .cornerLeavesTwo {
        width: 150px;
      }
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

    .goldenFlower {
      width: 150px;
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
        position: relative; 

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

    .boxPresentation {
        position: relative;

        > h1 {
            font-size: 2.6rem;
        }

        > .twoLeaves {
            width: 80px;
            left: 32%;
        }

        .cornerLeavesThree {
            width: 180px;
        }

        .powderImg {
            right: 1%;
            width: 180px;
        }
    }

    .boxDishPresentation {
        position: relative;

        > h2 {
            font-size: 2.2rem;
        }
    }


    .servicesBox {
        position: relative;

        .goldenFlower {
            top: 1%;
            width: 100px;
        }
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

    .boxDishPresentation
     > h2 {
      font-size: 1.2rem;
    }

    .cornerLeaves {
        top: 40%;
    }


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

    .servicesBox {
        .goldenFlower {
            width: 80px;
        }
    }
  }

  @media (max-width: 425px) {
  .boxPresentation {
    > h1 {
      font-size: 1.5rem;
    }

    .cornerLeavesThree {
        width: 80px;
    }

    .powderImg {
        width: 90px;
    }
  }
}

 .boxDishPresentation {
    text-align: center;

    > .cornerLeavesTwo {
        top: 70%;
        width: 50px;
    }

    > .cornerLeaves {
        top: 70%;
        width: 50px;
    }
 } 
 
 .servicesBox {
    .goldenFlower {
        width: 50px;
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

    .servicesBox {

        > .goldenFlower {
            width: 40px;
            left: 1%;
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

    .servicesBox {

        > .goldenFlower {
            display: none;
        }
}
 }
`;
