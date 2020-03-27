import React from 'react';

import { 
    StyledContainer, 
    TitleActive, 
    TitleSecond, 
    TitleThird 
} from './nav-of-articles.styles';

import IconNext from '../../assets/icons/next.svg';


const NavOfArticles = () => (
    <StyledContainer>
        <TitleActive>
            <h1>Latest</h1>
            <img src={IconNext} alt="icon-next"/>
        </TitleActive>
        <TitleSecond>
            <h1>Popular</h1>
        </TitleSecond>
        <TitleThird>
            <h1>From the store</h1>
        </TitleThird>
    </StyledContainer>
);

export default NavOfArticles;