import React from 'react'
import './ProductList.scss'
import { itemType } from '../../db'
import Product from './Product'

interface Props {
    products: itemType[]
    onPurchase: (item: itemType) => void
}
export default function ProductList({ products, onPurchase }: Props) {
    return (
        <div className='product-list' id="products">
            {products.map((product) =>
                <Product key={product.id} product={product} onPurchase={onPurchase}
                />)}
        </div>
    )
}
