import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    span {
        font-size: 13px;
        color: grey;
        margin-left: 3px;
    }
    img {
        width: 15px;
        height: 15px;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;