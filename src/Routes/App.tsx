import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../_reset.scss';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { getData, initDB, itemType } from '../db';
import "./App.scss";


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

        getData('cartItemsStore')
            .then((data) => {
                setCartItems(data)
            })
    }, []);

    return (<div className='app'>
        <CartContext.Provider value={[cartItems, setCartItems]}>
            <DBStatusContext.Provider value={[dbStatus, setDBStatus]}>
                <ToastContainer theme="dark" />
                <Header />
                <Outlet />
                <Footer />
            </DBStatusContext.Provider>
        </CartContext.Provider>
    </div>
    )
}
