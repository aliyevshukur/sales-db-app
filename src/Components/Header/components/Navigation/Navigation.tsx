import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomIcon from '../../../CustomIcon/CustomIcon';
import NavigationButton from '../MobileNavigation/NavigationButton/NavigationButton';
import "./Navigation.scss";

interface Props {

}

export default function Navigation({ }: Props) {
    const { pathname } = useLocation();

    return (
        <nav className='nav' >
            <ul className="nav-menu" >
                <li className={`nav-menu-item ${pathname === "/" && "nav-menu-item-active"}`}>
                    {pathname === "/" && <div className="" />}
                    <CustomIcon name="home" size={20} />
                    <Link to={`/`} className='nav-menu-item-link'>Home</Link>
                </li>
                <div className="nav-menu-dot" />

                <li className='nav-menu-item'>
                    <CustomIcon name="products" size={20} />
                    <Link to={`/#products`} className='nav-menu-item-link'>Products</Link>
                </li>
                <div className="nav-menu-dot" />

                <li className={`nav-menu-item ${pathname === "/about" && "nav-menu-item-active"}`}>
                    {pathname === "/about" && <div className="nav-menu-item-active" />}
                    <CustomIcon name="about" size={20} />
                    <Link to={`about`} className='nav-menu-item-link'>About us</Link>
                </li>
                <div className="nav-menu-dot" />

                <li className={`nav-menu-item ${pathname === "/reciepts" && "nav-menu-item-active"}`}>
                    {pathname === "/reciepts" && <div className="nav-menu-item-active" />}
                    <CustomIcon name="reciepts" size={20} />
                    <Link to={`reciepts`} className='nav-menu-item-link'>Reciepts</Link>
                </li>
            </ul>
        </nav>

    )
}
