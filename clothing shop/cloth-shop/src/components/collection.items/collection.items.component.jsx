import React from 'react';
import '../collection.items/collection.items.styles.scss';


import CustomButton from '../custom-button/button.component';


// Functional Component // Stateless
const CollectionItem = ({ id, name, imageUrl, price }) => (
    <div className='collection-item'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})`} }> 
            <CustomButton 
            className='custom-button'
            type='submit'>
            ADD TO CART
            </CustomButton>
        </div>
        
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{'$' + price}</span>

            </div>
    </div>
);

export default CollectionItem;