import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navigation.scss"
import { scrollToProducts } from '../../../Utils/ScrollToElement';

export default function Navigation() {

    const { pathname } = useLocation();


    return (
        <ul className='nav'>
            <li className='nav-item'>
                {pathname === "/" && <div className="nav-item-active" />}
                <Link to={`/`} className='nav-item-link'>Home</Link>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                {pathname === "#products" && <div className="nav-item-active" />}
                <div onClick={(e) => scrollToProducts(e)} className='nav-item-link'>Products</div>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                {pathname === "about" && <div className="nav-item-active" />}
                <Link to={`about`} className='nav-item-link'>About us</Link>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                {pathname === "about" && <div className="nav-item-active" />}
                <Link to={`reciepts`} className='nav-item-link'>Reciepts</Link>
            </li>
        </ul>
    )
}
