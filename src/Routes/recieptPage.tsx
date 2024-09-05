import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Reciept from '../Components/Reciept/Reciept'
import { dbStatusType, getData, itemType } from '../db'



export default function RecieptPage() {
    const [purchsedItems, setPurchasedItems] = useState<Array<itemType>>([]);

    useEffect(() => {
        getData('purchasedItemsStore').then((data) => {
            setPurchasedItems(data)
        }).catch((error) => {
            console.log("Error" + error)
        })
    }, [])

    return (
        <div>
            {purchsedItems.map((item) => <Reciept item={item} />)}
        </div>
    )
}
