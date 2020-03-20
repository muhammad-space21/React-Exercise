import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 70px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    img {
        width: 20px;
        height: 20px;
    }
    span {
        font-size: 14px;
        color: grey;
        margin-left: 2px;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;