import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: navy;
`;

export const Card = styled.div`
    width: 30vw;
    height: 30vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 50px;
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    font-weight: 500;
    color: purple;
`;

export const P = styled.h1`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
`;

export const H1 = styled.h1`
    font-size: 16px;
    color: red;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
`;