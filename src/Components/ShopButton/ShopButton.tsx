import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./ShopButton.scss";
import { scrollToProducts } from '../../Utils/ScrollToElement';


export default function ShopButton() {
    return (
        <div className='shop-button'>
            Shop now
            <div className="arrow-icon" onClick={(e) => scrollToProducts(e)}>
                <FaArrowRight color={"white"} size={"35px"} />
            </div>
        </div>
    )
}
