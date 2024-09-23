import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';
import Cart from '../../Components/Cart/Cart';
import ProdcutList from '../../Components/Products/ProductList';
import { itemType, getData, clearStore, addSingleItem } from '../../db';
import bigDecimal from 'js-big-decimal';
import { CartContext, DBStatusContext } from '../App';
import 'animate.css/animate.min.css';
import ShopButton from '../../Components/ShopButton/ShopButton';
import HeroImage from '../../Images/home-hero.png';


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

  if (dbStatus === "pending") {
    return <div>Loading...</div>
  }

  return (
    <div className="home-wrapper">

      <div className="home-wrapper-background">
        <div className="home-wrapper-background-square" />
        <div className="home-wrapper-background-round-overlay" />
      </div>

      <div className='home'>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-text-upper-subtitle">Unleash the Sound. Elevate Your Experience.</div>
            <div className="home-hero-text-title">SPEAKERS</div>
            <div className="home-hero-text-subtitle">Discover premium speakers that bring your music to life.</div>
            <ShopButton />
          </div>
          <img src={HeroImage} alt="" className="home-hero-image" />
        </div>

        {/* <Cart cartItems={cartItems} onClear={handleOnClear} onCheckout={checkoutItems} totalPrice={totalPrice} /> */}
        <ProdcutList products={storeItems} onPurchase={handleOnPurchase} />
      </div>
    </div>
  );
}

export default Home;
