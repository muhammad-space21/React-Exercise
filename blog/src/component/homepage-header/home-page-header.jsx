import React from 'react';

import { StyledContainer, Main, AsideRight } from './home-page-header.styles';

import ArticleMain from '../article-main/article-main';

const HomePageHeader = () => (
    <StyledContainer>
        <Main>

        </Main>
        <AsideRight>
            <ArticleMain asideArticle />
            <ArticleMain asideArticle />
            <ArticleMain asideArticle />
        </AsideRight>
    </StyledContainer>
);

export default HomePageHeader;