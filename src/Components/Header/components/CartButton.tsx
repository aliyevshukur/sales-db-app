import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import "./CartButton.scss";
import { on } from 'events';

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
