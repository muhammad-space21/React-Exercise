import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/button.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton className='custom-button button'> Go to checkout </CustomButton>
        </div>
    </div>
);

export default CartDropdown;