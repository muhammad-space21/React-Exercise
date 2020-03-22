import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    border-bottom: 0.5px solid #D5D7D8;
`;

export const Main = styled.div`
    width: 67vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #D5D7D8;
    padding-top: 30px;
    padding-bottom: 30px;
    @media screen and ( max-width: 768px ) {
        width: 100vw;
    } 
    @media screen and ( max-width: 991px ) {
        width: 60vw;
    }
`;

export const TextWrapper = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
    @media screen and ( max-width: 991px ) {
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    width: 90%;
    height: fit-content;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 450px;
        object-fit: cover;
    }
`;

export const AsideRight = styled.div`
    width: 33vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
    @media screen and ( max-width: 991px ) {
        width: 40vw;
    }
`;