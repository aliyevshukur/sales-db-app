import React from "react";
import { useNavigate } from "react-router-dom";
import { itemType } from "../../../db";
import "./CartItem.scss";

interface Props {
  productData: itemType;
}

export default function CartItem({ productData }: Props) {
  const { name, price, img } = productData;
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/product/${productData.id}`);
  }
  return (
    <div className='cartItem' onClick={handleOnClick}>
      <img src={img} alt='' className='cartItem-img' />
      <div className='cartItem-name'>{name}</div>
      <div className='cartItem-price'>{price}</div>
    </div>
  );
}
