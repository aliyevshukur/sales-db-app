import React from 'react'
import './Reciept.css'
import { itemType } from '../../db'

interface Props {
    item: itemType
}

export default function Reciept({ item }: Props) {
    return (
        <div>{item.name}</div>
    )
}
