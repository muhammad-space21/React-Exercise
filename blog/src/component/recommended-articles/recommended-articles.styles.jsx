import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid #D5D7D8;
    margin-top: 10px;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
    padding-top: 10px;
    margin-bottom: 20px;
`;

export const Col1 = styled.div`
    width: 40%;
    height: 90%;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }
`;

export const Col2 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;

export const Heading = styled.span`
    font-size: 16px;
    font-weight: 1000;
    line-height: 20px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Title = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const Price = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;