import bigDecimal from "js-big-decimal";
import React, { forwardRef, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addSingleItem, checkoutItems, clearStore, itemType } from "../../db";
import { CartContext } from "../../Routes/App";
import Button from "../Button/Button";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

interface Props {
  style?: {};
  className?: string;
  setCartOpen: (value: boolean) => void;
}

const Cart = forwardRef<HTMLDivElement, Props>(
  ({ style, className, setCartOpen }: Props, ref) => {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
      function calculateTotalPrice() {
        let totalPrice = "0";
        cartItems.forEach((product: itemType) => {
          const productPrice = product.price.slice(1);
          totalPrice = bigDecimal.add(totalPrice, productPrice);
        });
        setTotalPrice(+totalPrice);
      }
      calculateTotalPrice();
    }, [cartItems]);

    function handleOnClear() {
      clearStore("cartItemsStore")
        .then(() => {
          setCartItems([]);
        })
        .catch(() => {
          console.error("Failed to clear");
        });
    }

    function handleCheckout() {
      const checkoutError = checkoutItems(cartItems, totalPrice);
      if (checkoutError) {
        toast.error(checkoutError, {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      } else {
        toast.success("Checkout successful", {
          position: "top-right",
          autoClose: 3000,
        });
        setCartItems([]);
      }
    }

    return (
      <div className={`cart ${className}`} style={{ ...style }} ref={ref}>
        <div className='cartHeader'>Shopping cart</div>
        {cartItems.length === 0 ? (
          <div className='cart-empty'>Cart is empty</div>
        ) : (
          <>
            <div className='cartItemWrapper'>
              {cartItems.map((item: itemType) => (
                <CartItem key={item.id} productData={item} />
              ))}
            </div>
            <div className='totalPrice'>Total price: {totalPrice}$</div>
          </>
        )}
        <div className='buttonWrapper'>
          <Button title={"Clear"} onClick={handleOnClear} />
          <Button title={"Checkout"} className='checkoutButton' to='payment' />
        </div>
      </div>
    );
  },
);

export default Cart;
