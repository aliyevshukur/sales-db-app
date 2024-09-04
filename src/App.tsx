import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import { initDB, itemType, getData, dbStatusType, deleteStore, clearStore, addSingleItem } from './db';
import Header from './Components/Header/Header';
import ProductsWrapper from './Components/Products/ProductsWrapper';

function App() {



  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [dbStatus, setDBStatus] = useState<dbStatusType>('pending');


  useEffect(() => {
    initDB(setStoreItems, setCartItems, setDBStatus);
  }, []);


  function handleOnClear() {
    if (dbStatus === 'open') {
      clearStore('cartItemsStore', setCartItems);
    }
  }

  function handleOnPurchase(product: itemType) {
    addSingleItem(product, 'cartItemsStore', setCartItems);
  }

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Cart cartItems={cartItems} onClear={handleOnClear} />
        <ProductsWrapper products={storeItems} onPurchase={handleOnPurchase} />
      </div>
    </div>
  );
}

export default App;
