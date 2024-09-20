import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.scss"

export default function Navigation() {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <Link to={`reciepts`} className='nav-item-link'>Home</Link>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                <Link to={`reciepts`} className='nav-item-link'>Products</Link>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                <Link to={`reciepts`} className='nav-item-link'>About us</Link>
            </li>
            <div className="nav-dot" />
            <li className='nav-item'>
                <Link to={`reciepts`} className='nav-item-link'>Reciepts</Link>
            </li>
        </ul>
    )
}
