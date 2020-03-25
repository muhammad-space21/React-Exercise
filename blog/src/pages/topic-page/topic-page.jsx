import React from 'react';

import {StyledContainer} from './topic-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import HomepageBody from '../../component/homepage-body/homepage-body';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import Footer from '../../component/footer/footer';
import CallToActionSection from '../../component/call-to-action-section/call-to-action-section';


const TopicPage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <HomepageBody />
        <PopularTopicsSection />
        <Footer />
        <CallToActionSection />
    </StyledContainer>
);

export default TopicPage;