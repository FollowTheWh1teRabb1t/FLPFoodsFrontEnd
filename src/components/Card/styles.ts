import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #222;
    border-radius: 10%;
    font-family: 'Merriweather', sans-serif;
    box-shadow: 2px 1px 1px 2px rgba(0, 0, 0, 1);
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden; /* Evita que o conteúdo vaze */
    text-align: center; /* Centraliza os textos */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05); 
    box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.2); 
}

    .boxInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        > img {
            width: 250px; /* Define um tamanho fixo para alinhar todas as imagens */
            height: 200px; /* Define uma altura fixa */
            object-fit: contain; /* Garante que a imagem fique dentro da área sem distorcer */
        }

        > p {
            font-size: 1.1rem;
            margin-top: 8px;
            color: white;
            font-weight: bold;
            text-align: center;
            max-width: 90%; /* Evita que o texto quebre errado */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; /* Adiciona reticências caso o nome seja muito grande */
        }
    }

    .boxPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 1.6rem;
        padding: 0 10px;

        > p {
            color: yellow;
            font-weight: bold;
            flex: 1; /* Mantém o preço alinhado */
            text-align: left;
        }

        > .incrementButton {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            font-size: 1.8rem;
            border: 2px solid white;
            background-color: transparent;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }

`;
