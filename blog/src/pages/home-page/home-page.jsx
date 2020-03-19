import React from 'react';

import { StyledContainer } from './home-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
const HomePage = () => (
    <StyledContainer>
        <NavbarMain/>
        <NavMain/>
    </StyledContainer>
);

export default HomePage;
