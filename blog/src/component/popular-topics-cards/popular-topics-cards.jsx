import React from 'react';

import { 
    StyledContainer, 
    TextWrapper,  
    Heading, 
    Cards, 
    CardsHide, 
    P, 
    BtnWrapper 
} from './popular-topics-cards.styles';


// import ButtonString from '../buttons/button-string/button-string';


const PopularTopicsCards = () => (
    <StyledContainer>
        <Cards>
        {/* <BtnWrapper><ButtonString exchangeBtn /></BtnWrapper> */}
            <TextWrapper>
                <Heading>MARKETING</Heading>
            <P>How well do you know your customers?</P>
            </TextWrapper>
            {/* <BtnWrapper center ><ButtonString /></BtnWrapper> */}
        </Cards>
        <CardsHide>
        {/* <BtnWrapper><ButtonString exchangeBtn /></BtnWrapper> */}
            <TextWrapper>
                <Heading>DECISION MAKING</Heading>
            <P>Balancing data, experience, and intuition.</P>
            </TextWrapper>
            {/* <BtnWrapper center ><ButtonString /></BtnWrapper> */}
        </CardsHide>
        <CardsHide>
        {/* <BtnWrapper><ButtonString exchangeBtn /></BtnWrapper> */}
            <TextWrapper>
                <Heading>ENTREPRENEURSHIP</Heading>
            <P>In start-ups and established companies.</P>
            </TextWrapper>
            {/* <BtnWrapper center ><ButtonString /></BtnWrapper> */}
        </CardsHide>
    </StyledContainer>
);

export default PopularTopicsCards;