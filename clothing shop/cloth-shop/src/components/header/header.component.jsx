import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crwn.logo.svg';
import '../header/header.component.styles.scss';


// Functional Component // Stateless 
const Header = () => (
    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP    
            </Link>
            <Link className='option' to='/shop'>
                CONTACT   
            </Link>
        </div>
    </div>
);

export default Header; 