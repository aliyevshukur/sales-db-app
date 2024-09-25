import React from 'react';
import { itemType } from '../../db';
import HeroImage from '../../Images/home-hero.png';
import Button from '../Button/Button';
import './Product.scss';

interface Props {
    product: itemType
    onPurchase: (item: itemType) => void
}



export default function Prodcut({ product, onPurchase }: Props) {
    function handleOnPurchase() {
        onPurchase(product)
    }

    return (
        <div className='product'>
            <div className="product-darken" />
            <div className='product-name'>{product.name}</div>
            <img src={product.img} alt="" className="product-image" />

            <div className='product-price'>{product.price}</div>
            <Button title={"buy"} onClick={handleOnPurchase} className={"product-button"} />
        </div>
    )
}
