import React from 'react';

import { StyledContainer, Row, Heading } from './popular-topics-section.styles';

import PopularTopicsCards from '../popular-topics-cards/popular-topics-cards';
// import ButtonArrow from '../buttons/button-arrow/button-arrow';

const PopularTopicsSection = () => (
    <StyledContainer>
        <Heading>Popular <span>Topics</span> </Heading>
        <Row>
            <PopularTopicsCards />
        </Row>
        {/* <ButtonArrow seeTopics /> */}
    </StyledContainer>
);

export default PopularTopicsSection;