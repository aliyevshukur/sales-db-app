import React from 'react'
import './Header.scss'
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import CartButton from './components/CartButton';

export default function Header() {

    return (
        <div className='header'>
            <Link to="/" className='header-logo'>
                <img src="./site-logo.png" alt="" className='header-logo-icon' />
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
