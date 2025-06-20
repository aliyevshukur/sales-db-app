import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToProducts } from '../../lib/Utils/ScrollToElement';
import "./ShopButton.scss";


export default function ShopButton() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div className='shop-button' onClick={(e) => scrollToProducts(e, pathname, navigate)}>
            Shop now
            <div className="arrow-icon" >
                <FaArrowRight color={"white"} />
            </div>
        </div>
    )
}
