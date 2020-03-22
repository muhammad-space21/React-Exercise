import React from 'react';

import { StyledContainer } from './homepage-body.styles';

import ArticleMain from '../article-main/article-main';

const HomepageBody = () => (
    <StyledContainer>
        <ArticleMain />
        <ArticleMain />
        <ArticleMain />
        <ArticleMain />
        <ArticleMain />
        <ArticleMain /> 
    </StyledContainer>
);

export default HomepageBody;