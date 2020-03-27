import React from 'react';

import { StyledContainer, Header } from './topic-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import NavOfArticles from '../../component/nav-of-articles/nav-of-articles';
import HomepageBody from '../../component/homepage-body/homepage-body';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import Footer from '../../component/footer/footer';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';


const TopicPage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <Header />
        <HomepageBody />
        <NavOfArticles />
        <PopularTopicsSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default TopicPage;