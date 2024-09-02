import React from 'react'

interface Props {
    name: string,
    price: string,
}

export default function CartItem({ name, price }: Props) {

    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}
