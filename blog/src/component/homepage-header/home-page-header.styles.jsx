import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: row;
    border: 2px solid green;
`;

export const Main = styled.div`
    width: 67vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid red;
`;

export const AsideRight = styled.div`
    width: 33vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid blue;
    padding-right: 40px;
    padding-left: 40px;
`;