import React, { useState, useEffect } from 'react';
import './Home.css';
import Cart from '../Components/Cart/Cart';
import { initDB, itemType, getData, dbStatusType, deleteStore, clearStore, addSingleItem, purchaseType } from '../db';
import Header from '../Components/Header/Header';
import ProductsWrapper from '../Components/Products/ProductsWrapper';


function Home() {
  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [dbStatus, setDBStatus] = useState<dbStatusType>('open');

  useEffect(() => {
    initDB({ setDBStatus });

    if (dbStatus === 'open') {
      getData('shopItemsStore')
        .then((data) => {
          setStoreItems(data);
        })
        .catch((error) => {
          console.error(error);
        });;
    }
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
      <div className='body'>
        <Cart cartItems={cartItems} onClear={handleOnClear} />
        <ProductsWrapper products={storeItems} onPurchase={handleOnPurchase} />
      </div>
    </div>
  );
}

export default Home;
