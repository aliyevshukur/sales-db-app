import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

export default function Navigation() {
    return (
        <nav>
            <ul>
                <Link to={`reciepts`} className='links'>Reciepts</Link>
            </ul>
        </nav>
    )
}
