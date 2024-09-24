import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../../Images/site-logo.png';
import Cart from '../Cart/Cart';
import './Header.scss';
import CartButton from './components/CartButton';
import Navigation from './components/Navigation';


export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: any) {
            if (!cartRef.current?.contains(event.target)) {
                setCartOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className='header' ref={cartRef}>
            <Link to="/" className='header-logo'>
                <img src={SiteLogo} alt="" className='header-logo-icon' />
                <div className='header-logo-text'>
                    <div>Planet</div>
                    <div>Resonance</div>
                </div>
            </Link>
            <Navigation />
            <CartButton onClick={() => { setCartOpen(!cartOpen) }} itemCount="0" />
            {cartOpen && <Cart />}
        </div>
    )
}
