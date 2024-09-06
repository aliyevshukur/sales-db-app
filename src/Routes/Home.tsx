import React, { useState, useEffect } from 'react';
import './Home.css';
import Cart from '../Components/Cart/Cart';
import { initDB, itemType, getData, dbStatusType, deleteStore, clearCart, addSingleItem, purchaseType } from '../db';
import Header from '../Components/Header/Header';
import ProductsWrapper from '../Components/Products/ProductsWrapper';


function Home() {
  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [dbStatus, setDBStatus] = useState<dbStatusType>('open');

  useEffect(() => {
    initDB({ setDBStatus });

    if (dbStatus === 'open') {
      updateDB("shopItemsStore", setStoreItems);
    }
  }, []);

  function handleOnClear() {
    if (dbStatus === 'open') {
      clearCart()
        .then(() => {
          setCartItems([]);
        })
        .catch(() => {
          console.error("Failed to clear")
        });
    }
  }

  function handleOnPurchase(product: itemType) {
    addSingleItem(product, 'cartItemsStore')
      .then(() => {
        updateDB("cartItemsStore", setCartItems)
      })
      .catch((error) => {
        console.error(error)
      });
  }

  function updateDB(storeName: string, setState: React.Dispatch<React.SetStateAction<itemType[]>>) {
    getData(storeName)
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.error(error);
      });
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
