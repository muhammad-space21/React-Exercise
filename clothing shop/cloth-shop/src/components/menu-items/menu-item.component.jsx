import React from 'react';
import '../menu-items/menu-item.styles.css';//error 


// Functional Component of Menu-Items // no state is needed
const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
    <div className="background-image" 
    style = {{ backgroundImage: `url(${imageUrl})`}}></div>    
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);
export default MenuItem;