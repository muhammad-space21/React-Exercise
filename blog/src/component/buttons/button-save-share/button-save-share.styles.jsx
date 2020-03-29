import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    img {
        width: 50px;
        height: 50px;
    }
    span {
        font-size: 12px;
    }
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;