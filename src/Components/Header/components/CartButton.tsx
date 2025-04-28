import React, { forwardRef } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import "./CartButton.scss";

interface Props {
    itemCount: number,
    onClick?: () => void
}

export default forwardRef<HTMLDivElement, Props>(function CartButton({ itemCount = 0, onClick }: Props, ref) {
    return (
        <div className='cart-button' onClick={onClick} ref={ref}>
            <div>{itemCount}</div>
            <LuShoppingCart color={"white"} />
        </div>
    )
});
