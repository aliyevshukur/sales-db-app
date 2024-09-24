import bigDecimal from 'js-big-decimal';
import React, { useContext, useEffect, useState } from 'react';
import { addSingleItem, clearStore, itemType } from '../../db';
import { CartContext } from '../../Routes/App';
import Button from '../Button/Button';
import './Cart.scss';
import CartItem from './CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        function calculateTotalPrice() {
            let totalPrice = "0";
            cartItems.forEach((product: itemType) => {
                const productPrice = product.price.slice(1);
                totalPrice = bigDecimal.add(totalPrice, productPrice);
            })
            setTotalPrice(+totalPrice)
        }

        calculateTotalPrice();
    }, [cartItems]);
    console.log(`Car Items: ${cartItems}`)
    function handleOnClear() {
        clearStore('cartItemsStore')
            .then(() => {
                setCartItems([]);
            })
            .catch(() => {
                console.error("Failed to clear")
            });
    }


    function checkoutItems() {
        if (cartItems.length !== 0) {
            const date = Date.now()
            const reciept = {
                purchasedItems: cartItems,
                date: new Date(date),
                totalPrice: totalPrice,
            }
            addSingleItem(reciept, 'recieptsStore')
            clearStore('cartItemsStore')
                .then(() => {
                    setCartItems([]);
                })
                .catch(() => {
                    console.error("Failed to clear")
                });
        }
    }



    return (
        <div className='cart'>
            <div className='cartHeader'>Shopping cart</div>
            <div className='cartItemWrapper'>
                {cartItems.map((item: itemType) => <CartItem name={item.name} price={item.price} />)}
            </div>
            <div className='totalPrice'>Total price: {totalPrice}$</div>
            <div className='buttonWrapper'>
                <Button title={"Clear"} onClick={handleOnClear} />
                <Button title={"Checkout"} onClick={checkoutItems} className='checkoutButton' />
            </div>
        </div>
    )
}
