import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Cart';
import { initDB, itemType, getData } from './db';

function App() {

  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);


  useEffect(() => {
    initDB(setStoreItems);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Cart cartItems={storeItems} />
      </header>
    </div>
  );
}

export default App;
