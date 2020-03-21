import React from 'react';

import { StyledContainer, Row, Heading } from './newsletter-section.styles';

import NewsletterCards from '../newsletter-cards/newsletter-cards';

const NewsletterSection = () => (
    <StyledContainer>
        <Heading>Subscribe to HBR Newsletters: <span>Keep Informed</span></Heading>
        <Row>
            <NewsletterCards />
        </Row>
    </StyledContainer>

);

export default NewsletterSection;