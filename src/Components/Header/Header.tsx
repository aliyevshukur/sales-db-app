import React, { useContext, useEffect, useRef, useState } from 'react';
import Logo from '../../Components/Logo/Logo';
import { CartContext } from '../../Routes/App';
import Cart from '../Cart/Cart';
import './Header.scss';
import CartButton from './components/CartButton';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Navigation from './components/Navigation/Navigation';


export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [cartItems] = useContext(CartContext);
    const cartCount = cartItems.length;
    const cartRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: any) {
            if (buttonRef.current?.contains(event.target)) setCartOpen(!cartOpen);
            else if (!cartRef.current?.contains(event.target)) setCartOpen(false);
        }

        function changeHeaderFixed(event: any) {
            if (window.scrollY > 150) setIsHeaderFixed(true)
            else setIsHeaderFixed(false)
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', changeHeaderFixed);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', changeHeaderFixed);
        }
    }, [cartOpen]);

    function toggleMenu(flag?: boolean) {

        if (flag === undefined)
            setMenuOpen(!menuOpen)
        else setMenuOpen(flag);
    }

    return (
        <div className={`header ${isHeaderFixed && "header-fixed"}`} >
            <Logo />
            <Navigation />
            <CartButton itemCount={cartCount} ref={buttonRef} />
            <Cart ref={cartRef} className={cartOpen ? 'cart-open' : ''} setCartOpen={setCartOpen} />
            <MobileNavigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
    )
}
