import React from 'react'
import './Product.css'
import { itemType } from '../../db'
import Button from '../Button/Button'

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
            <div className='productName'>{product.name}</div>
            <div className='productBottom'>
                <div className='productPrice'>{product.price}$</div>
                <Button title={"purchase"} onClick={handleOnPurchase} />
            </div>
        </div>
    )
}
