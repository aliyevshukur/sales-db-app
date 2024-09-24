import { on } from 'events';
import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import "./CartButton.scss";

interface Props {
    itemCount: string,
    onClick: () => void
}

export default function CartButton({ itemCount = "0", onClick }: Props) {
    return (
        <div className='cart-button' onClick={onClick}>
            {itemCount}
            <LuShoppingCart color={"white"} />
        </div>
    )
}
