import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: #222;
    text-align: center;

    > h3 {
        color: yellow;
        font-size: 2.5rem;

        @media (max-width: 768px) {
            font-size: 1.8rem;
        }
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            font-size: 1.4rem;
            gap: 1.5rem;
        }
    }

    .boxInfo,
    .boxReservation,
    .boxAvailability {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;
