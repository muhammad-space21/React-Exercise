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

export const Header = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    border: 2px solid green;
    @media screen and ( max-width: 800px ) {
        padding-left: 10px;
    }
`;