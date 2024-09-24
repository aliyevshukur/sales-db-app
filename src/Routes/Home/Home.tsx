import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';
import ProductsCarousel from '../../Components/Products/ProductsCarousel';
import { itemType, getData, addSingleItem } from '../../db';
import { DBStatusContext } from '../App';
import 'animate.css/animate.min.css';
import ShopButton from '../../Components/ShopButton/ShopButton';
import HeroImage from '../../Images/home-hero.png';
import { CartContext } from '../../Routes/App';



function Home() {
  const [dbStatus] = useContext(DBStatusContext);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [cartItems, setCartItems] = useContext(CartContext);


  useEffect(() => {
    if (dbStatus === 'open') {
      updateDB("shopItemsStore", setStoreItems);
    }
  }, [dbStatus]);

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

        <div className="home-products" id={"products"}>
          <ProductsCarousel products={storeItems} onPurchase={handleOnPurchase} />
        </div>
      </div>
    </div>
  );
}

export default Home;
