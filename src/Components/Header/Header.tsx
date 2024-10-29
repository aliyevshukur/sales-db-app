import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../../Images/site-logo.png';
import { CartContext } from '../../Routes/App';
import Cart from '../Cart/Cart';
import './Header.scss';
import CartButton from './components/CartButton';
import Navigation from './components/Navigation';


export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems] = useContext(CartContext);
    const cartCount = cartItems.length;
    const cartRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    console.log(`cart open ${cartOpen}`)


    useEffect(() => {
        function handleClickOutside(event: any) {
            // console.log(buttonRef.current?.contains(event.target));
            if (buttonRef.current?.contains(event.target)) {
                // console.log(`cart open ${cartOpen}`)
                setCartOpen(!cartOpen);
            } else if (!cartRef.current?.contains(event.target)) {
                setCartOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [cartOpen]);


    return (
        <div className='header' >
            <Link to="/" className='header-logo'>
                <img src={SiteLogo} alt="" className='header-logo-icon' />
                <div className='header-logo-text'>
                    <div>Planet</div>
                    <div>Resonance</div>
                </div>
            </Link>
            <Navigation />
            <CartButton itemCount={cartCount} ref={buttonRef} />
            <Cart ref={cartRef} className={cartOpen ? 'cart-open' : ''} setCartOpen={setCartOpen} />
        </div>
    )
}
