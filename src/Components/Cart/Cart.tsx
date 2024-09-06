import React from 'react'
import CartItem from './CartItem'
import Button from '../Button/Button';
import './Cart.css';
import { itemType } from '../../db';
import bigDecimal from 'js-big-decimal';

interface Props {
    cartItems: itemType[];
    onClear: () => void
    onCheckout: () => void
    totalPrice: number
};

export default function Cart({ cartItems, onClear, onCheckout, totalPrice }: Props) {



    return (
        <div className='cart'>
            <div className='cartHeader'>Shopping cart</div>
            <div className='cartItemWrapper'>
                {cartItems.map((item) => <CartItem name={item.name} price={item.price} />)}
            </div>
            <div className='totalPrice'>Total price: {totalPrice}$</div>
            <div className='buttonWrapper'>
                <Button title={"Clear"} onClick={onClear} />
                <Button title={"Checkout"} onClick={onCheckout} className='checkoutButton' />
            </div>
        </div>
    )
}
