import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToProducts } from '../../../../lib/Utils/ScrollToElement';
import CustomIcon from '../../../CustomIcon/CustomIcon';
import "./MobileNavigation.scss";
import NavigationButton from './NavigationButton/NavigationButton';

interface Props {
    menuOpen: boolean
    toggleMenu: any
}

export default function MobileNavigation({ menuOpen, toggleMenu }: Props) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const menuRef = useRef<HTMLUListElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function handleClickOutside(event: any) {

            if (menuRef.current?.contains(event.target) && !btnRef.current?.contains(event.target)) {
                setTimeout(() => {
                    toggleMenu(false);
                }, 100);
            }

        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <nav className='mobileNav'>
            <NavigationButton menuOpen={menuOpen} toggleMenu={toggleMenu} ref={btnRef} />
            <ul className={`mobileNav-menu ${menuOpen ? 'mobileNav-menu-open' : ''}`} ref={menuRef}>
                <li className='mobileNav-menu-item'>
                    {pathname === "/" && <div className="mobileNav-menu-item-active" />}
                    <CustomIcon name="home" size={20} />
                    <Link to={`/`} className='mobileNav-menu-item-link'>Home</Link>
                </li>
                <div className="mobileNav-menu-dot" />
                <li className='mobileNav-menu-item'>
                    {pathname === "#products" && <div className="mobileNav-menu-item-active" />}
                    <CustomIcon name="products" size={20} />
                    <Link to={`/#products`} className='mobileNav-menu-item-link'>Products</Link>
                </li>
                <div className="mobileNav-menu-dot" />
                <li className='mobileNav-menu-item'>
                    {pathname === "/about" && <div className="mobileNav-menu-item-active" />}
                    <CustomIcon name="about" size={20} />
                    <Link to={`about`} className='mobileNav-menu-item-link'>About us</Link>
                </li>
                <div className="mobileNav-menu-dot" />
                <li className='mobileNav-menu-item'>
                    {pathname === "/reciepts" && <div className="mobileNav-menu-item-active" />}
                    <CustomIcon name="reciepts" size={20} />
                    <Link to={`reciepts`} className='mobileNav-menu-item-link'>Reciepts</Link>
                </li>
            </ul>
        </nav>

    )
}
