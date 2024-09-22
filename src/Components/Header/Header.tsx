import React from 'react'
import './Header.scss'
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import CartButton from './components/CartButton';
import SiteLogo from '../../Images/site-logo.png';

export default function Header() {

    return (
        <div className='header'>
            <Link to="/" className='header-logo'>
                <img src={SiteLogo} alt="" className='header-logo-icon' />
                <div className='header-logo-text'>
                    <div>Planet</div>
                    <div>Resonance</div>
                </div>
            </Link>
            <Navigation />
            <CartButton />
        </div>
    )
}
