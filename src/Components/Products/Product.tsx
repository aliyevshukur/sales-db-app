import React from 'react';
import '../../_animations.scss';
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
            <div className="product shadow-pulse">
                <div className='product-title'>{product.name}</div>
                <img src={product.img} alt="" className="product-image" />

                <div className="product-footer">
                    <div className='product-header-price'>{product.price}</div>
                    <Button title={"Add to cart"} onClick={handleOnPurchase} className={"product-button"} />
                </div>
            </div>
        </div>
    )
}
