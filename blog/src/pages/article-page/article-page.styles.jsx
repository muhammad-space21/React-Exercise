import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
`;

export const Body = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and ( max-width: 992px ) {
        justify-content: flex-start;
    }
`;

export const Main = styled.div`
    width: 50vw;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    border: 2px solid red;
    @media screen and ( max-width: 992px ) {
        width: 60vw;
        margin-left: 10px;
    }
    @media screen and ( max-width: 768px ) {
        width: 100vw;
    }
`;








