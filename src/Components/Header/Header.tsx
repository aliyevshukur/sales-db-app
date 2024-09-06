import React from 'react'
import './Header.css'
import { CiShop } from "react-icons/ci";
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>

            <IconContext.Provider value={{ size: '50px', color: 'black' }} >
                <Link to="/" className='logo'>
                    <CiShop />
                    <div>SUPERMARKET</div>
                </Link>
            </IconContext.Provider>
            <Navigation />
        </div>
    )
}
