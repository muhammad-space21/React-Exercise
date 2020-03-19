import styled from 'styled-components';


export const StyledContainer = styled.button`
    width: 50%;
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
    height: 58px;
    border: 1px solid #D5D7D8;
    text-align: center;
    background-color: white;
    span {
        font-size: 16px;
        font-weight: 700;
    }
    &:hover {
        opacity: 0.5;
    }
`;

