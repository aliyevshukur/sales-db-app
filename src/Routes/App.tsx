import React, { createContext, useState, useEffect } from 'react';
import "./App.scss";
import '../_reset.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { itemType, initDB } from '../db';
import Footer from '../Components/Footer/Footer';

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

    return (<div className='app'>
        <CartContext.Provider value={[cartItems, setCartItems]}>
            <DBStatusContext.Provider value={[dbStatus, setDBStatus]}>
                <Header />
                <Outlet />
                <Footer />
            </DBStatusContext.Provider>
        </CartContext.Provider>
    </div>
    )
}
