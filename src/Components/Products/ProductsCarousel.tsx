import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { itemType } from '../../db';
import Product from './Product';
import './ProductsCarousel.scss';

interface Props {
    products: itemType[]
    onPurchase: (item: itemType) => void
}

export default function ProductsCarousel({ products, onPurchase }: Props) {

    let sliderRef: any = useRef(null);


    function NextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={"custom-nextArrow"}
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                >
                    <path
                        d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414z"
                        data-name="Right"
                    />
                </svg>
            </div>
        );
    }

    function PrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={"custom-prevArrow"}
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                >
                    <path
                        d="M14.383 7.076a1 1 0 0 0-1.09.217l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 15 16V8a1 1 0 0 0-.617-.924z"
                        data-name="Left"
                    />
                </svg>
            </div>
        );
    }

    useEffect(() => {
        // sliderRef?.slickGoTo(0);
    }, []);

    // An object containing responsive settings for the carousel
    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                initialSlide: 0,
                dots: true,

            },

        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

    // TODO There is bug on first render there is not any item with slick-current class
    const settings = {
        infinite: true,
        dots: true,
        initialSlide: 0,
        centerPadding: "0px",
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: responsiveSettings,
        swipeToSlide: true,
        speed: 500,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Slider {...settings} className="product-slider" ref={slider => {
            sliderRef = slider;
        }}>
            {products.map((product, index) =>
                <Product key={index} product={product} onPurchase={onPurchase}
                />)}
        </Slider>
    );
}