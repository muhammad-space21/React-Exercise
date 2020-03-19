import React from 'react';

import { StyledContainer } from './home-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import Footer from '../../component/footer/footer';


const HomePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <Footer />
    </StyledContainer>
);

export default HomePage;
