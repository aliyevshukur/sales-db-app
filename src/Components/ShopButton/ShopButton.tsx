import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./ShopButton.scss";

export default function ShopButton() {
    return (
        <div className='shop-button'>
            Shop now
            <div className="arrow-icon">
                <FaArrowRight color={"white"} size={"35px"} />
            </div>
        </div>
    )
}
