import React from 'react';

import { StyledContainer } from './homepage-body.styles';

import ArticleMain from '../article-main/article-main';

const HomepageBody = () => (
    <StyledContainer>
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle /> 
    </StyledContainer>
);

export default HomepageBody;