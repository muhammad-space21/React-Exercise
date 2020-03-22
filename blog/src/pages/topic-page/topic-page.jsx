import React from 'react';

import {StyledContainer} from './topic-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import ArticleMain from '../../component/article-main/article-main';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import Footer from '../../component/footer/footer';


const TopicPage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <ArticleMain bodyArticle />
        <PopularTopicsSection />
        <Footer />
    </StyledContainer>
);

export default TopicPage;