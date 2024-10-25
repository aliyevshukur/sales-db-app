import bigDecimal from 'js-big-decimal';
import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addSingleItem, clearStore, itemType } from '../../db';
import { CartContext } from '../../Routes/App';
import Button from '../Button/Button';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

interface Props {
    style?: {},
    className?: string,
};


const Cart = forwardRef<HTMLDivElement, Props>(({ style, className }: Props, ref) => {
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
            toast.success("Checkout successfull", {
                icon: false,
            })
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
        } else {
            toast.error("Cart is empty");
        }
    }

    return (
        <div className={`cart ${className}`} style={{ ...style }} ref={ref}>
            <div className='cartHeader'>Shopping cart</div>
            {cartItems.length === 0 ? <div className='cart-empty'>Cart is empty</div> :
                <>
                    <div className='cartItemWrapper'>
                        {cartItems.map((item: itemType) => <CartItem key={item.id} name={item.name} price={item.price} img={item.img} />)}
                    </div>
                    <div className='totalPrice'>Total price: {totalPrice}$</div>
                </>}
            <div className='buttonWrapper'>
                <Button title={"Clear"} onClick={handleOnClear} />
                <Button title={"Checkout"} onClick={checkoutItems} className='checkoutButton' />
            </div>
        </div>
    )

});

export default Cart