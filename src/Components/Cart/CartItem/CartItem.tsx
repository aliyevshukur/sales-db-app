import React from 'react';
import './CartItem.scss';

interface Props {
    name: string,
    price: string,
    img: string,
}

export default function CartItem({ name, price, img }: Props) {

    return (
        <div className='cartItem'>
            <img src={img} alt="" className="cartItem-img" />
            <div className='cartItem-name'>{name}</div>
            <div className='cartItem-price'>{price}</div>
        </div>
    )
}
