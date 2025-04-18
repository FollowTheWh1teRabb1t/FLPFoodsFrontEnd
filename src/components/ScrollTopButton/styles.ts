import styled from 'styled-components';

export const Button = styled.button`
    position: fixed;
    bottom: 40px;
    right: 45px;
    background-color: #f9a826;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 12px;
    cursor: pointer;
    font-size: 18px;
    z-index: 1000;
    transition: opacity 0.3 ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    
    &:hover {
        background-color: #e08e1a;
    }
`