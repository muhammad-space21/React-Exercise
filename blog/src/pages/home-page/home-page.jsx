import React from 'react';

import { StyledContainer } from './home-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import HomePageHeader   from '../../component/homepage-header/home-page-header';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';
import HomepageBody from '../../component/homepage-body/homepage-body';
import InsightSection from '../../component/insight-section/insight-section';
import SpecialCoverageSection from '../../component/special-coverage-section/special-coverage-section';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import SubscribeSection from '../../component/subscribe-section/subscribe-section';
import NewsletterSection from '../../component/newsletter-section/newsletter-section';
import SearchSection from '../../component/search-section/search-section';
import Footer from '../../component/footer/footer';


const HomePage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <HomePageHeader />
        <HomepageBody />
        <InsightSection />
        <SpecialCoverageSection />
        <PopularTopicsSection />
        <SubscribeSection />
        <NewsletterSection />
        <SearchSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default HomePage;
