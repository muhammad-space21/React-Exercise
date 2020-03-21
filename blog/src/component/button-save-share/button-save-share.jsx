import React from 'react';

import { StyledContainer } from './button-save-share.styles';

import IconSave from '../../assets/icons/save.svg';
import IconShare from '../../assets/icons/share.svg';

const ButtonSaveShare = (props) => (
    <StyledContainer {...props}>
        {
            props.save ? <img src={IconSave} alt="icon-save"/> && <span>Save</span>
            : 
            <img src={IconShare} alt="icon-share"/> && <span>Share</span>
        }
    </StyledContainer>
);

export default ButtonSaveShare;