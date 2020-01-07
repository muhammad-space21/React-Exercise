import React from 'react';
import './button.styles.scss';


// Functional Component // Stateless 
const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton; 