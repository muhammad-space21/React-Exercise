import React from 'react';

import { 
    StyledContainer, 
    Body, 
    Main
} from './article-page.styles';


import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import ArticlePageAside from '../../component/article-page-aside/article-page-aside';
import CommentFormSection from '../../component/comment-form-section/comment-form-section';
import Footer from '../../component/footer/footer';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';


const ArticlePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <Body>
            <Main>

            </Main>
            <ArticlePageAside />
        </Body>
        <CommentFormSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default ArticlePage;