import React from 'react';
import { itemType } from '../../db';
import Button from '../Button/Button';
import './Product.scss';

interface Props {
    product: itemType
    onPurchase: (item: itemType) => void
}



export default function Prodcut({ product, onPurchase, ...otherProps }: Props) {
    function handleOnPurchase() {
        onPurchase(product)
    }

    return (
        <div className='product-wrapper' {...otherProps}>
            <div className="product">
                <div className="product-header">
                    <div className='product-header-name'>{product.name}</div>
                    <div className='product-header-price'>{product.price}</div>
                </div>
                <img src={product.img} alt="" className="product-image" />

                <Button title={"Add to cart"} onClick={handleOnPurchase} className={"product-button"} />
            </div>
        </div>
    )
}
