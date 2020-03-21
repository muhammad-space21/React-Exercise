import React from 'react';

import {StyledContainer} from './article-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import Footer from '../../component/footer/footer';


const ArticlePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <Footer />
    </StyledContainer>
);

export default ArticlePage;