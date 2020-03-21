import React from 'react';

import { StyledContainer } from './home-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import SubscribeSection from '../../component/subscribe-section/subscribe-section';
import NewsletterSection from '../../component/newsletter-section/newsletter-section';
import SearchSection from '../../component/search-section/search-section';
import Footer from '../../component/footer/footer';


const HomePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <PopularTopicsSection />
        <SubscribeSection />
        <NewsletterSection />
        <SearchSection />
        <Footer />
    </StyledContainer>
);

export default HomePage;
