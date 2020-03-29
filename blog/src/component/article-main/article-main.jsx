import React from 'react';

import { StyledContainer, TextWrapper, ButtonsWrapper, Col1 } from './article-main.styles';

import ButtonSaveShare from '../buttons/button-save-share/button-save-share';

import ImageArticle  from '../../assets/images/coronavirus-1.jpg';

const ArticleMain = (props) => (
    <StyledContainer {...props}>
        <Col1>
            <h1>How to Avoid Shaking Hands</h1>
            <TextWrapper>
                <h2>managing yourself</h2>
                <h3>digital article</h3>
                <h4>by Amy</h4>
            </TextWrapper>
            <span>You can still feel connected from afar.</span>
            <ButtonsWrapper>
                <ButtonSaveShare save /> 
                <ButtonSaveShare />
            </ButtonsWrapper>
        </Col1>
        <img src={ImageArticle} alt="article"/>
    </StyledContainer>
);

export default ArticleMain;