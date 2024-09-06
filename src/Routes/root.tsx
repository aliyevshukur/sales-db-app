import React, { useState, useEffect } from 'react';
import { initDB, itemType, getData, dbStatusType, deleteStore, clearCart, addSingleItem, purchaseType } from '../db';
import { Outlet } from 'react-router-dom';

import Home from './Home'
import RecieptPage from '../Routes/RecieptPage'
import Header from '../Components/Header/Header';

export default function Root() {


    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
