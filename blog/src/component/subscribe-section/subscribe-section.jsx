import React from 'react';

import { StyledContainer, Row, Heading } from './subscribe-section.styles';

import NewsletterCards from '../newsletter-cards/newsletter-cards';

const SubscribeSection = () => (
    <StyledContainer>
        <Heading>Subscribe to HBR Newsletters: <span>Keep Informed</span></Heading>
        <Row>
            <NewsletterCards />
        </Row>
    </StyledContainer>

);

export default SubscribeSection;