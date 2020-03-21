import React from 'react';

import {StyledContainer} from './topic-page.styles';

import NavbarMain from '../../component/navbar/navbar';
import NavMain from '../../component/nav/nav';
import PopularTopicsSection from '../../component/popular-topics-section/popular-topics-section';
import Footer from '../../component/footer/footer';


const TopicPage = () => (
    <StyledContainer>
        <NavbarMain />
        <NavMain />
        <PopularTopicsSection />
        <Footer />
    </StyledContainer>
);

export default TopicPage;