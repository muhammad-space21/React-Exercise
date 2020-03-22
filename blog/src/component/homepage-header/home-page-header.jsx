import React from 'react';

import { HeadingBig, SecondaryText, AuthorName } from '../constant.styles';

import { 
    StyledContainer, 
    Main, 
    AsideRight, 
    TextWrapper, 
    ImageWrapper
} from './home-page-header.styles';

import ArticleMain from '../article-main/article-main';
import ArticleImage from '../../assets/images/asset-5.jpeg';

const HomePageHeader = () => (
    <StyledContainer>
        <Main>
            <TextWrapper>
                <HeadingBig>How Bad Times Bring Out the Best in People</HeadingBig>
                <SecondaryText>Lessons from one local bank’s response to Hurricane Katrina.</SecondaryText>
                <AuthorName>By Bill Taylor</AuthorName>
            </TextWrapper>
            <ImageWrapper>
                <img src={ArticleImage} alt="article"/>
            </ImageWrapper>
        </Main>
        <AsideRight>
            <ArticleMain asideArticle  imageHide />
            <ArticleMain asideArticle  imageHide />
            <ArticleMain asideArticle   imageHide />
        </AsideRight>
    </StyledContainer>
);

export default HomePageHeader;