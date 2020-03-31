import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: teal;
`;

export const Card = styled.div`
    width: 30vw;
    height: 30vh;
    background-color: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
`;

export const P = styled.h1`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;

export const H1 = styled.h1`
    font-size: 16px;
    color: red;
    font-weight: 400;
    line-height: 20px;
`;