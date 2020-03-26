import React from 'react';

import { 
    StyledContainer, 
    Col1, 
    ImageWrapper, 
    Col2, 
    TextWrapper 
} from './article-page-aside.preview.styles';

import RecommendedArticle from '../../component/articles-recommended/articles-recommended';

import ImageSide from '../../assets/images/asset1-min.jpg';

import { HeadingSmall } from '../../component/constant.styles';

const ArticlePageAside = () => (
    <StyledContainer>
        <Col1>
            <h1>What to read next</h1>
            <ImageWrapper>
                <img src={ImageSide} alt="aside" />
            </ImageWrapper>
            <TextWrapper>
                <HeadingSmall>
                    The Coronavirus Crisis Doesn’t Have to Lead to Layoffs
                </HeadingSmall>
            </TextWrapper>
        </Col1>
        <Col2>
            <h1>Recommended</h1>
            <RecommendedArticle/>
            <RecommendedArticle/>
            <RecommendedArticle/>
        </Col2>
    </StyledContainer>
);

export default ArticlePageAside;