import React from 'react';
import './CartItem.css';

interface Props {
    name: string,
    price: string,
}

export default function CartItem({ name, price }: Props) {

    return (
        <div className='cartItem'>
            <div>{name}</div>
            <div>{price}$</div>
        </div>
    )
}
