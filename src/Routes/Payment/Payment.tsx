import { useContext, useEffect, useState } from "react";
import { getData, itemType, removeCartItem, updateDB } from "../../db";
import { CartContext } from "../App";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderedItems from "./OrderedItems/OrderedItems";
import OrderSummary from "./OrderSummary/OrderSummary";
import "./Payment.scss";

interface PaymentProps {}

function Payment() {
  const [cartItems, setCartItems] = useContext(CartContext);

  function removeOrderedItem(id: string) {
    removeCartItem(id);
    updateDB("cartItemsStore", setCartItems);
  }

  return (
    <div className='payment'>
      <div className='payment-left'>
        <OrderedItems
          cartItems={cartItems}
          removeOrderedItem={removeOrderedItem}
        />
        <OrderSummary />
      </div>
      <div className='payment-right'>
        <CheckoutForm />
      </div>
    </div>
  );
}

export default Payment;
