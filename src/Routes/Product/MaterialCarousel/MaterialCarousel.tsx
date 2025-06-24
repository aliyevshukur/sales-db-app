import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderButton from '..//SlideButton/SlideButton';
import Material from "../Material/Material";
import './MaterialCarousel.scss';

function MaterialCarousel() {

    let materialSliderRef: any = useRef(null);

    const materials = ["carbon", "brushedMetal", "matteBlack", "silicone", "glossyPlastic", "metalMesh"]

    const settings = {
        infinite: true,
        initialSlide: 0,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        cssEase: "ease-in-out",
        nextArrow: <SliderButton type="next" />,
        prevArrow: <SliderButton type="previous" />,
    };

    return <Slider {...settings} className="material-caousel" ref={slider => {
        materialSliderRef = slider;
    }}>
        {materials.map((material) =>
            <Material name={material} />
        )}
    </Slider>
}

export default MaterialCarousel