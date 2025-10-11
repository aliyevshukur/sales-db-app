import React from "react";
import { useNavigate } from "react-router-dom";
import "../../_animations.scss";
import { itemType } from "../../db";
import Button from "../Button/Button";
import "./ProductCard.scss";

interface Props {
  product: itemType;
  setCartItems?: any;
  onPurchase: (item: itemType, setCartItems: any) => void;
}

export default function ProdcutCard({
  product,
  onPurchase,
  setCartItems,
  ...otherProps
}: Props) {
  const navigate = useNavigate();

  function handleOnPurchase(e: any) {
    e.stopPropagation();
    onPurchase(product, setCartItems);
  }

  function redirectToProduct() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div
      className='productCard-wrapper'
      onClick={redirectToProduct}
      {...otherProps}
    >
      <div className='productCard shadow-pulse'>
        <div className='productCard-title'>{product.name}</div>
        <img src={product.img} alt='' className='productCard-image' />

        <div className='productCard-footer'>
          <div className='productCard-header-price'>{product.price}</div>
          <Button
            title={"Add to cart"}
            onClick={handleOnPurchase}
            className={"productCard-button"}
          />
        </div>
      </div>
    </div>
  );
}
