import styled from 'styled-components';

import { Nav } from 'react-bootstrap';


export const StyledNav = styled(Nav)`
    width: 100%;
    height: 36px;
    border: 1px solid #D5D7D8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 85px;
    @media screen and ( max-width: 1050px ) {
        display: none;
    }
`;

export const StyledLinks = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Links = styled.span`
    font-size: 15px;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;