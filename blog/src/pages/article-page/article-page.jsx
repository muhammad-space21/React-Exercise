import React from 'react';

import { StyledContainer, Body } from './article-page.styles';


import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import MainFullArticle from '../../component/main-full-article/main-full-article';
import ArticlePageAside from '../../component/article-page-aside.preview/article-page-aside.preview';
import WritersProfile from '../../component/writers-profile/writers-profile';
import ArticleRelatedPreview  from '../../component/article-related.preview/article-related.preview';
import CommentFormSection from '../../component/comment-form-section/comment-form-section';
import Footer from '../../component/footer/footer';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';


const ArticlePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <Body>
            <MainFullArticle />
            <ArticlePageAside />
        </Body>
        <WritersProfile />
        <WritersProfile />
        <WritersProfile />
        <ArticleRelatedPreview />
        <CommentFormSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default ArticlePage;