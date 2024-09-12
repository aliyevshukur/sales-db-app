import React, { createContext, useState, useEffect } from 'react';
import "./App.css"
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { itemType, initDB } from '../db';

export const CartContext = createContext<any>([]);
export const DBStatusContext = createContext<any>('pending');


export default function App() {

    const [cartItems, setCartItems] = useState<Array<itemType>>([]);
    const [dbStatus, setDBStatus] = useState('pending');

    useEffect(() => {
        initDB()
            .then((status) => {
                setDBStatus(status)
            });

    }, []);

    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>
            <DBStatusContext.Provider value={[dbStatus, setDBStatus]}>
                <Header />
                <Outlet />
            </DBStatusContext.Provider>
        </CartContext.Provider>
    )
}
