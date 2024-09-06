import React from 'react';
import './CartItem.css';

interface Props {
    name: string,
    price: string,
}

export default function CartItem({ name, price }: Props) {

    return (
        <div className='cartItem'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
    )
}
