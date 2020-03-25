import React from 'react';

import { 
    StyledContainer, 
    Row, 
    Col1, 
    Col2, 
    Heading, 
    Title, 
    Price 
} from './recommended-articles.styles';

import ButtonCustom from '../button-custom/button-custom';

import ImageArticle from '../../assets/images/asset1-min.jpg';

const RecommendedArticle = () => (
    <StyledContainer>
        <Row>
            <Col1>
                <img src={ImageArticle} alt="article"/>
            </Col1>
            <Col2>
                <Heading>You at Work: Doing Your Best Work Remotely</Heading>
                <Title>PRESS TOOLKIT</Title>
                <Price>$24.95</Price>
                <ButtonCustom viewDetails >View Details</ButtonCustom>
            </Col2>
        </Row>
    </StyledContainer>
);

export default RecommendedArticle;