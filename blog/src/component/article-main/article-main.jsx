import React from 'react';

import { StyledContainer, TextWrapper, ButtonsWrapper } from './article-main.styles';

import ButtonSaveShare from '../button-save-share/button-save-share';

const ArticleMain = (props) => (
    <StyledContainer {...props}>
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
    </StyledContainer>
);

export default ArticleMain;