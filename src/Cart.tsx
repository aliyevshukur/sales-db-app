import React from 'react'
import CartItem from './CartItem'

interface Props {
    cartItems: {
        id: string,
        name: string,
        price: string
    }[];
};

export default function Cart({ cartItems }: Props) {
    return (
        <div>
            {cartItems.map((item) => <CartItem name={item.name} price={item.price} />)}
        </div>
    )
}
