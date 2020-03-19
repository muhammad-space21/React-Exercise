import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import {
    StyledNavbar,
    BrandContainer,
    BrandName,
    StyledNav,
    StyledLink,
    HR,
    Active
} from './navbar.styles';

import IconBrand from '../../assets/icons/bank.svg';
import IconSearch from '../../assets/icons/search.svg';


const NavbarMain = () => (
    <>
        <StyledNavbar>
            <BrandContainer>
                <Navbar.Brand href="#home">
                    <img src={IconBrand} alt="icon-brand"/>
                </Navbar.Brand>
                <BrandName>
                    Harvard <br/>Business<br/> Review
                </BrandName>
            </BrandContainer>
            <StyledNav  className="mr-auto">
                <StyledLink><Nav.Link href="#" ><Active>Subscribe</Active></Nav.Link> </StyledLink>
                <StyledLink><Nav.Link href="#" >Sign in</Nav.Link> </StyledLink>
                <HR/>
                <StyledLink>
                    <Nav.Link href="#" >
                        <img src={IconSearch} alt="icon-search"/>
                    </Nav.Link> 
                </StyledLink>
            </StyledNav>
            </StyledNavbar>
        </>
);

export default NavbarMain;