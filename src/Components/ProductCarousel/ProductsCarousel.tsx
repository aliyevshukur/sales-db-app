import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { itemType } from '../../db';
import CustomIcon from "../CustomIcon/CustomIcon";
import Product from './ProductCard';
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
                <CustomIcon name="arrow-right" size={32} />
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
                <CustomIcon name="arrow-left" size={32} />

            </div>
        );
    }

    useEffect(() => {
        // sliderRef?.slickGoTo(0);
    }, []);

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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
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

        ],

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