import React from 'react'
import { itemType } from '../../db'
import Product from './ProductCard'
import './ProductList.scss'

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
