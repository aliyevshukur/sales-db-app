import React, { useEffect, useRef } from "react";
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
  const responsiveConfig = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
      },
    },
  ];

  const nextArrow = (
    <SlideButton type='next' iconSize={32} customClass='custom-nextArrow' />
  );
  const prevArrow = (
    <SlideButton type='previous' iconSize={32} customClass='custom-prevArrow' />
  );

  const settings = {
    infinite: true,
    dots: true,
    initialSlide: 0,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    cssEase: "ease-in-out",
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    responsive: responsiveConfig,
  };

  return (
    <div className='product-slider'>
      <Slider {...settings} ref={(slider) => {}}>
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
