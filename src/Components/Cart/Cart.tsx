import React from 'react'
import CartItem from './CartItem'
import Button from '../Button/Button';
import './Cart.css';
import { itemType } from '../../db';

interface Props {
    cartItems: itemType[];
    onClear: () => void
};

export default function Cart({ cartItems, onClear }: Props) {

    function calculateTotalPrice() {
        let totalPrice = 0;

        cartItems.forEach((product) => {
            totalPrice = +totalPrice + +product.price;
        })
        return totalPrice

    }

    return (
        <div className='cart'>
            <div className='cartHeader'>Shopping cart</div>
            <div className='cartItemWrapper'>
                {cartItems.map((item) => <CartItem name={item.name} price={item.price} />)}
            </div>
            <div className='totalPrice'>Total price: {calculateTotalPrice()}$</div>
            <div className='buttonWrapper'>
                <Button title={"Clear"} onClick={onClear} />
                <Button title={"Checkout"} className='checkoutButton' />
            </div>
        </div>
    )
}
