import styled, { keyframes } from 'styled-components';



const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }   
`


export const ReservaCard = styled.div`
    position: absolute;
    background-color: #444;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    right: 0;
    top: 200%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: ${slideIn} 1.5 ease;
    z-index: 999;
    overflow-y: scroll;

    p {
        margin: 0;
        color: #ccc;
    }

    strong {
        color: #FFCC00
    }

    

`

