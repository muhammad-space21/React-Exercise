import React from 'react';

import { StyledContainer } from './button-string.styles';

import IconPlus from '../../assets/icons/plus.svg';
import IconExchange from '../../assets/icons/exchange.svg';

const ButtonString = (props) => {
    
    return (
        <StyledContainer {...props}>
            {
                props.exchangeBtn ? <img src={IconExchange} alt="icon-exchange"/> && <span>Change</span>
                : 
                <img src={IconPlus} alt="icon-plus"/> && 
                props.signUp ? <span>Sign Up</span> : <span>Follow This Topic</span>
            }
        </StyledContainer>
    )
};

export default ButtonString;