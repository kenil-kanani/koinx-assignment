import React from 'react'

// css import
import './NavBar.css';

// image import
import KoinXLogo from '../../assets/koinx-logo.png'

// component import
import GetStartedButton from '../GetStartedButton/GetStartedButton';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img className='navbar-image' src={KoinXLogo} alt="" />
            <ul className='navbar-lists'>
                <li>Crypto Taxes</li>
                <li>Free Tools</li>
                <li>Resource Center</li>
                <GetStartedButton backgroundColor={'#1B4AEE'} textColor={'#FFFFFF'}>
                    Get Started
                </GetStartedButton>
            </ul>
            <GiHamburgerMenu size={30} className='hamburger-icon' />
        </nav>
    )
}

export default NavBar