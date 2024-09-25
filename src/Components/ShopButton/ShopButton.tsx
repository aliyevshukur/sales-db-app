import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { scrollToProducts } from '../../Utils/ScrollToElement';
import "./ShopButton.scss";


export default function ShopButton() {
    return (
        <div className='shop-button' onClick={(e) => scrollToProducts(e)}>
            Shop now
            <div className="arrow-icon" >
                <FaArrowRight color={"white"} />
            </div>
        </div>
    )
}
