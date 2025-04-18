import styled from 'styled-components';
import backgroundHome from  '@/assets/backgroundHome.jpg'

export const Container = styled.div`
    width: 100%;
    height: 580vh;
    background-image: url(${backgroundHome});
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

    .boxPresentation {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12.5rem;
        font-size: 2.2rem;
        font-family: 'Montserrat', sans-serif;

        > .twoLeaves {
            width: 150px;
            position: absolute;
            left: 35%;
            top: 79%;
        }

        > .cornerLeavesThree {
            position: absolute;
            width: 300px;
            left: 0.1%;
        }

        > .powderImg {
            position: absolute;
            width: 300px;
            left: 80%;
        }
    }

    .boxDishPresentation {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 15.5rem;
        font-family: 'Merriweather', sans-serif;
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
            left: -1%;

        }

        .cornerLeavesTwo {
            width: 200px;
            position: absolute;
            right: 0.1%;
            top: 120%;
        }
    }

    .boxMenu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 15.5rem;
        font-family: 'Merriweather', sans-serif ;

        h2 {
            font-size: 2.5rem;
        }

        .dishesArea {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }


        .beverageArea {
            display: flex;
            flex-direction: row;
            gap: 1.25rem;
            margin-top: 2.0rem;
            
            .explosionImg {
                width: 200px;
                position: absolute;
                left: 4%;
                top: 228%;
            }

            .flyingLeaves {
                position: absolute;
                width: 200px;
                right: 5%;
                top: 325%;
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
        }

        .boxSquares {
            display: flex;
            flex-direction: row;
            margin-top: 5.0rem;
            gap: 2.50rem;

            > p {
                border: 1px solid #fff;
                padding: 0.625rem;
                font-size: 1.5rem;
            }
        }
    }

    .boxReviews {
    width: 1024px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    margin-top: 15.5rem;
    margin-bottom: 22.7rem;
    font-family: 'Merriweather';

    > h2 {
        font-size: 2.5rem;
    }

    > .whiteFlowers, .rosePetal {
        position: absolute;
        width: 200px;
    }

    .whiteFlowers {
        top: 500%;
        right: 0.2%;
    }

    .rosePetal {
        width: 250px;
        left: -2%;
    }
}

.cardReview {
    display: flex;
    width: 100%;
    background-color: #222;
    border-radius: 1.25rem;

    .arrowBtn {
        background-color: yellow;
        font-size: 2.5rem;
        font-weight: bold;
        border-radius: 20px;
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
}

.textArea {
    width: 80%;
    font-size: 1.6rem;
    padding: 50px;

    .nameClient {
        color: yellow;
    }

        
}

.imageArea {
    width: 40%;
}

.imageArea img {
    width: 80%; 
    height: auto;
}

@media (max-width: 1024px) {
    height: 400vh;

    .boxReviews {
        > .whiteFlowers, .rosePetal {
        position: absolute;
        width: 200px;
    }

    .whiteFlowers {
        width: 150px;
        top: 360%;
        right: 0.2%;
    }

    .rosePetal {
        width: 150px;
        top: 360%;
        left: -2%;
    }
    }


    .boxPresentation {
        flex-direction: column;
        text-align: center;
        font-size: 1.8rem;

        > .twoLeaves {
            left: 32%;
            top: 47%;
            width: 150px;
        }

        > .cornerLeavesThree {
            width: 200px;
            left: -5%;
        }

        > .powderImg {
            width: 200px;
            left: 80%;
        }
    }

    .boxDishPresentation {
        > h2 {
            font-size: 2.5rem;
        }

        > .lambImg {
            width: 22rem;
        }

        .cornerLeaves {
            width: 150px;
            left: -1%;
        }

        .cornerLeavesTwo {
            width: 150px;
            right: -2%;
            top: 80%;
        }
    }

    .boxMenu {
        h2 {
            font-size: 2rem;
        }

        .dishesArea,
        .beverageArea {
            flex-wrap: wrap;
            justify-content: center;
        }

        .explosionImg {
            width: 150px;
            display: none;

        }

        .flyingLeaves {
           display: none;
        }
    }

    .servicesBox {
        > h2 {
            font-size: 2.5rem;
        }

        > p {
            font-size: 1rem;
        }

        .goldenFlower {
            width: 150px;
            left: 5%;
        }

        .boxSquares {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;

            > p {
                font-size: 1.2rem;
            }
        }
    }

    .boxReviews {
        width: 90%;
        > h2 {
            font-size: 2rem;
        }
    }

    .cardReview {
        flex-direction: column;
        align-items: center;

        .arrowBtn {
            font-size: 2rem;
            margin: 10px;
            padding: 5px;
            border-radius: 100%;
        }
    }

    .textArea {
        width: 100%;
        padding: 20px;
        font-size: 1.2rem;
    }

    .imageArea {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .imageArea img {
        width: 60%;
    }
}

@media (max-width: 600px) {
    height: 968vh;


    .boxReviews {
        > .whiteFlowers, .rosePetal {
        position: absolute;
        width: 150px;
    }

    .whiteFlowers {
        top: 920%;
        right: 0.2%;
    }

    .rosePetal {
     
        top: 900%;
        left: -2%;
    }
    }

    .boxPresentation {
        font-size: 1.1rem;

        > .twoLeaves {
            width: 80px;
            left: 32%;
            top: 85%;
        }

        > .cornerLeavesThree {
            width: 100px;
        }

        > .powderImg {
            width: 80px;
            left: 82%;
        }


    }

    .boxDishPresentation {
        > h2 {
            font-size: 2rem;
        }

        > p {
            text-align: center;
            font-size: 1rem;
            padding: 0 1rem;
        }

        > .lambImg {
            width: 18rem;
        }

        .cornerLeaves {
            width: 80px;
        }

        > .cornerLeavesTwo {
            width: 80px;
            right: 1%;
            top: 125%;
        }
    }

    .boxMenu {
        h2 {
            font-size: 1.5rem;
        }
    }

    .servicesBox {
        > h2 {
            font-size: 2rem;
        }

        > p {
            font-size: 0.8rem;
        }

        .goldenFlower {
            display: none;
        }

        
    }

    .cardReview {
        .arrowBtn {
            font-size: 1.5rem;
            padding: 5px;
            border-radius: 100%;
        }
    }

    .textArea {
        font-size: 1rem;
    }

    .boxSquares {
        width: 400px;
    }

}



`