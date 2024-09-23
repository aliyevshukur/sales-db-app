import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { itemType } from '../../db'
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
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                >
                    <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
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
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </div>
        );
    }

    useEffect(() => {
        sliderRef?.slickGoTo(0);
    }, []);

    // An object containing responsive settings for the carousel
    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]

    const settings = {
        className: "center",
        centerMode: true,
        initialSlide: 0,
        infinite: true,
        centerPadding: "0px",
        draggable: true,
        slidesToShow: 3, //changes on responsive
        slidesToScroll: 1,
        responsive: responsiveSettings,
        swipeToSlide: true,
        focusOnSelect: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <Slider {...settings} className="product-slider" ref={slider => {
            sliderRef = slider;
        }}>
            {products.map((product) =>
                <Product key={product.id} product={product} onPurchase={onPurchase}
                />)}
        </Slider>
    );
}