import React from 'react';
import './button.styles.scss';


// Functional Component // Stateless 
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherProps}>
        {children}
    </button>
);

export default CustomButton; 