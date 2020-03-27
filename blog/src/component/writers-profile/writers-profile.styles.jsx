import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ImageWrapper = styled.div`
    width: 100px;
    height: 110px;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit:  cover;
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
`;

