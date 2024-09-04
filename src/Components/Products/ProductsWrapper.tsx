import React from 'react'
import './ProductWrapper.css'
import { itemType } from '../../db'
import Product from './Product'

interface Props {
    products: itemType[]
    onPurchase: (item: itemType) => void
}
export default function ProductsWrapper({ products, onPurchase }: Props) {
    return (
        <div className='productsWrapper'>
            {products.map((product) => <Product product={product} onPurchase={onPurchase} />)}
        </div>
    )
}
