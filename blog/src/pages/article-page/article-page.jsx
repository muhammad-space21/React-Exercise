import React from 'react';

import {StyledContainer} from './article-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import CommentFormSection from '../../component/comment-form-section/comment-form-section';
import Footer from '../../component/footer/footer';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';


const ArticlePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <CommentFormSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default ArticlePage;