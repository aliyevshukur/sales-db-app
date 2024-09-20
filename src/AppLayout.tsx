import React from 'react'
import Header from './Components/Header/Header'
import Home from './Routes/Home'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    return (
        <div>
            <Header />
            <Home />
        </div>
    )
}
