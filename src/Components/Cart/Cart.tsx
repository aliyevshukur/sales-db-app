import React from 'react'
import CartItem from './CartItem'
import Button from '../Button/Button';
import './Cart.css';

interface Props {
    cartItems: {
        id: string,
        name: string,
        price: string
    }[];
};

export default function Cart({ cartItems }: Props) {
    return (
        <div className='cart'>
            <div className='cartHeader'>Shopping cart</div>
            {cartItems.map((item) => <CartItem name={item.name} price={item.price} />)}
            <div className='buttonWrapper'>
                <Button title={"Clear"} />
                <Button title={"Checkout"} className='checkoutButton' />
            </div>
        </div>
    )
}
