import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 20vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    width: 80%;
    height: 100px;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TextWrapper = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;