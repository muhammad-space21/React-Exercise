import React from 'react';

import { StyledContainer } from './button-arrow.styles';

import IconArrowNext from '../../assets/icons/next.svg';

const ButtonArrow = (props) => {
    
    return (
        <StyledContainer {...props}>
            {
                props.seeTopics ? <span>See All Topics</span> && <img src={IconArrowNext} alt="icon-arrow"/>  
                : 
                <span> See All Newsletters </span>  &&  <img src={IconArrowNext} alt="icon-arrow"/>
            //    { props.arrowDown ? <img src={IconArrowNext} alt="icon-arrow"/>  &&  <span> Load More Items </span>}
            }
        </StyledContainer>
    )
};

export default ButtonArrow;