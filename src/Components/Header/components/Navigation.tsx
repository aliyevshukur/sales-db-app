import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Navigation.scss";

export default function Navigation() {

    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

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

    function scrollToProducts(event: React.MouseEvent<HTMLDivElement>, pathname: string) {
        event.preventDefault();
        if (pathname !== "/") {
            navigate("/");
        }
        const productsElement = document.getElementById("products");
        if (productsElement) {
            window.scrollTo({
                top: productsElement.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <nav className='nav' ref={menuRef}>
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={`nav-toggle-icon ${menuOpen ? 'nav-toggle-icon-open' : ''}`} />
                <span className={`nav-toggle-icon ${menuOpen ? 'nav-toggle-icon-open' : ''}`} />
                <span className={`nav-toggle-icon ${menuOpen ? 'nav-toggle-icon-open' : ''}`} />
            </button>
            <ul className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`} >
                <li className='nav-menu-item'>
                    {pathname === "/" && <div className="nav-menu-item-active" />}
                    <Link to={`/`} className='nav-menu-item-link'>Home</Link>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "#products" && <div className="nav-menu-item-active" />}
                    <div onClick={(e) => scrollToProducts(e, pathname)} className='nav-menu-item-link'>Products</div>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "/about" && <div className="nav-menu-item-active" />}
                    <Link to={`about`} className='nav-menu-item-link'>About us</Link>
                </li>
                <div className="nav-menu-dot" />
                <li className='nav-menu-item'>
                    {pathname === "/reciepts" && <div className="nav-menu-item-active" />}
                    <Link to={`reciepts`} className='nav-menu-item-link'>Reciepts</Link>
                </li>
            </ul>
        </nav>

    )
}
