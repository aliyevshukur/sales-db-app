import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import Cart from '../Components/Cart/Cart';
import { itemType, getData, clearStore, addSingleItem } from '../db';
import bigDecimal from 'js-big-decimal';
import ProductsWrapper from '../Components/Products/ProductsWrapper';
import { CartContext, DBStatusContext } from './App';
import 'animate.css/animate.min.css';


function Home() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [dbStatus] = useContext(DBStatusContext);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (dbStatus === 'open') {
      updateDB("shopItemsStore", setStoreItems);
    }
  }, [dbStatus]);

  useEffect(() => {
    function calculateTotalPrice() {
      let totalPrice = "0";
      cartItems.forEach((product: itemType) => {
        const productPrice = product.price.slice(1);
        totalPrice = bigDecimal.add(totalPrice, productPrice);
      })
      setTotalPrice(+totalPrice)
    }

    calculateTotalPrice();
  }, [cartItems]);

  function handleOnClear() {
    clearStore('cartItemsStore')
      .then(() => {
        setCartItems([]);
      })
      .catch(() => {
        console.error("Failed to clear")
      });
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
    if (cartItems.length !== 0) {
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
    <div className="home">
      {dbStatus === "pending" ?
        <div>Loading...</div>
        : <div className='body'>
          <Cart cartItems={cartItems} onClear={handleOnClear} onCheckout={checkoutItems} totalPrice={totalPrice} />
          <ProductsWrapper products={storeItems} onPurchase={handleOnPurchase} />
        </div>}
    </div>
  );
}

export default Home;
