import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import "./CartButton.scss";

export default function CartButton({ itemCount = "0" }) {
    return (
        <div className='cart-button'>
            {itemCount}
            <LuShoppingCart color={"white"} />
        </div>
    )
}
