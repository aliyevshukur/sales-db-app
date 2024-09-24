import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navigation.scss"
import { scrollToProducts } from '../../../Utils/ScrollToElement';

export default function Navigation() {

    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (!menuRef.current?.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])



    return (
        <nav className='nav' ref={menuRef}>
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="nav-toggle-icon" />
                <span className="nav-toggle-icon" />
                <span className="nav-toggle-icon" />
                <span className="nav-toggle-icon" />
            </button>
            <ul className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`} >
                <li className='nav-menu-item'>
                    {pathname === "/" && <div className="nav-menu-item-active" />}
                    <Link to={`/`} className='nav-menu-item-link'>Home</Link>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "#products" && <div className="nav-menu-item-active" />}
                    <div onClick={(e) => scrollToProducts(e)} className='nav-menu-item-link'>Products</div>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "about" && <div className="nav-menu-item-active" />}
                    <Link to={`about`} className='nav-menu-item-link'>About us</Link>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "about" && <div className="nav-menu-item-active" />}
                    <Link to={`reciepts`} className='nav-menu-item-link'>Reciepts</Link>
                </li>
            </ul>
        </nav>

    )
}
