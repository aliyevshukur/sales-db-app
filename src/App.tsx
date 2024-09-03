import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import { initDB, itemType, getData } from './db';
import Header from './Components/Header/Header';

function App() {

  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);


  useEffect(() => {
    initDB(setStoreItems);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Cart cartItems={storeItems} />
      </div>
    </div>
  );
}

export default App;
