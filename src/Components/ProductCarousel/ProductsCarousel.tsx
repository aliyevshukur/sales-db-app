import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { itemType } from "../../db";
import SlideButton from "../SlideButton/SlideButton";
import ProductCard from "./ProductCard";
import "./ProductsCarousel.scss";

interface Props {
  products: itemType[];
  setCartItems?: any;
  onPurchase: (item: itemType, setCartItems: any) => void;
}

export default function ProductsCarousel({
  products,
  setCartItems,
  onPurchase,
}: Props) {
  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    if (width < 1440) return 4;
    return 5;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // ✅ Update when window resizes
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextArrow = (
    <SlideButton type='next' iconSize={32} customClass='custom-nextArrow' />
  );
  const prevArrow = (
    <SlideButton type='previous' iconSize={32} customClass='custom-prevArrow' />
  );

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow, // 👈 dynamic value
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    nextArrow,
    prevArrow,
  };

  return (
    <div className='product-slider'>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            setCartItems={setCartItems}
            onPurchase={onPurchase}
          />
        ))}
      </Slider>
    </div>
  );
}
