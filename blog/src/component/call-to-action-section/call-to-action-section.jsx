import React from 'react';

import { StyledContainer, Title, CallToAction } from './call-to-action-section.styles';


const CallToActionSection = () => (
    <StyledContainer>
        <Title><span>1/2</span>FREE ARTICLES LEFT <span>></span></Title>
        <CallToAction>Register<span>for more</span> | </CallToAction>
        <CallToAction>SUBSCRIBE + SAVE!</CallToAction>
    </StyledContainer>
);

export default CallToActionSection;