import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderButton from '../../../Components/SlideButton/SlideButton';
import Material from "../Material/Material";
import './MaterialCarousel.scss';

interface Props {
    updateMaterialName: (currentIndex: number) => void;
    materials: string[]
}

function MaterialCarousel({ updateMaterialName, materials }: Props) {

    let materialSliderRef: any = useRef(null);


    const settings = {
        infinite: true,
        initialSlide: 0,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        cssEase: "ease-in-out",
        nextArrow: <SliderButton type="next" customClass={"custom-nextArrow"} />,
        prevArrow: <SliderButton type="previous" customClass={"custom-prevArrow"} />,
        afterChange: updateMaterialName
    };

    return (<div className="material-carousel">
        <Slider {...settings} ref={slider => { materialSliderRef = slider; }}>
            {materials.map((material) => {
                return <Material name={material} />
            })}
        </Slider>
    </div>)
}

export default MaterialCarousel