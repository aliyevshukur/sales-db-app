import React from 'react'
import './Product.scss'
import { itemType } from '../../db'
import Button from '../Button/Button';
import HeroImage from '../../Images/home-hero.png';

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
            <img src={HeroImage} alt="" className="product-image" />

            <div className='product-price'>{product.price}$</div>
            <Button title={"buy"} onClick={handleOnPurchase} className={"product-button"} />
        </div>
    )
}
