import React, { useState, useEffect } from 'react';
import './Home.css';
import Cart from '../Components/Cart/Cart';
import { initDB, itemType, getData, dbStatusType, deleteStore, clearStore, addSingleItem, purchaseType, recieptType } from '../db';
import bigDecimal from 'js-big-decimal';
import ProductsWrapper from '../Components/Products/ProductsWrapper';


function Home() {
  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [dbStatus, setDBStatus] = useState<dbStatusType>('open');
  const [reciepts, setReciepts] = useState<Array<recieptType>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    initDB({ setDBStatus });

    if (dbStatus === 'open') {
      updateDB("shopItemsStore", setStoreItems);
    }

    calculateTotalPrice();
  }, [cartItems]);

  function handleOnClear() {
    if (dbStatus === 'open') {
      clearStore('cartItemsStore')
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

  function checkoutItems() {
    const date = Date.now()
    const reciept = {
      purchasedItems: cartItems,
      date: new Date(date),
      totalPrice: totalPrice,
    }
    addSingleItem(reciept, 'recieptsStore')
    clearStore('cartItemsStore')
      .then(() => {
        setCartItems([]);
      })
      .catch(() => {
        console.error("Failed to clear")
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

  function calculateTotalPrice() {
    let totalPrice = "0";
    cartItems.forEach((product) => {
      const productPrice = product.price.slice(1);
      totalPrice = bigDecimal.add(totalPrice, productPrice);
    })
    setTotalPrice(+totalPrice)
  }

  return (
    <div className="App">
      <div className='body'>
        <Cart cartItems={cartItems} onClear={handleOnClear} onCheckout={checkoutItems} totalPrice={totalPrice} />
        <ProductsWrapper products={storeItems} onPurchase={handleOnPurchase} />
      </div>
    </div>
  );
}

export default Home;
