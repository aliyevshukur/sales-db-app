import 'animate.css/animate.min.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeBenefits from '../../Components/HomeBenefits/HomeBenefits';
import ProductsCarousel from '../../Components/ProductCarousel/ProductsCarousel';
import ShopButton from '../../Components/ShopButton/ShopButton';
import { addSingleItem, getData, itemType } from '../../db';
import HeroImage from '../../Images/home-hero.png';
import useStretchLetterSpacing from '../../lib/Hooks/useStretchLetterspacing';
import { CartContext } from '../../Routes/App';
import { DBStatusContext } from '../App';
import './Home.scss';



function Home() {
  const [dbStatus] = useContext(DBStatusContext);
  const [storeItems, setStoreItems] = useState<Array<itemType>>([]);
  const [cartItems, setCartItems] = useContext(CartContext);
  const subtitleText = "Unleash the Sound. Elevate Your Experience."
  const { letterSpacing: subtitleLetterSpacing, containerRef: subtitleContainerRef, textRef: subtitleTextRef } = useStretchLetterSpacing(subtitleText);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const timeout = setTimeout(scrollToElement, 300);

      return () => clearTimeout(timeout);
    }
  }, [hash]);

  useEffect(() => {
    if (dbStatus === 'open') {
      updateDB("shopItemsStore", setStoreItems);
    }
  }, [dbStatus]);

  function handleOnPurchase(product: itemType) {
    toast.success(`Added ${product.name} to cart`, {
      icon: false,
    });
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
          <div className="home-hero-text" ref={subtitleContainerRef} style={{ letterSpacing: `${subtitleLetterSpacing}px` }}>
            <div className="home-hero-text-upper-subtitle" ref={subtitleTextRef}>{subtitleText}</div>
            <div className="home-hero-text-title">SPEAKERS</div>
            <div className="home-hero-text-subtitle">Discover premium speakers that bring your music to life.</div>
            <ShopButton />
          </div>
          <img src={HeroImage} alt="" className="home-hero-image" />
        </div>

        <HomeBenefits />

        <div className="home-products" id={"products"}>
          <div className="home-products-title">Our Products</div>
          <ProductsCarousel products={storeItems} onPurchase={handleOnPurchase} />
        </div>
      </div>
    </div>
  );
}

export default Home;
