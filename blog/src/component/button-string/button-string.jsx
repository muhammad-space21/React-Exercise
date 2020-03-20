import React from 'react';

import { StyledContainer } from './button-string.styles';

import IconPlus from '../../assets/icons/plus.svg';

const ButtonString = () => (
    <StyledContainer>
        <img src={IconPlus} alt="icon-plus"/>
        <span>Sign Up</span>
    </StyledContainer>
);

export default ButtonString;