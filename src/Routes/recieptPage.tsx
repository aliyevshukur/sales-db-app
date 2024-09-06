import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Reciept from '../Components/Reciept/Reciept'
import { dbStatusType, getData, itemType, recieptType } from '../db'
import "./RecieptPage.css"


export default function RecieptPage() {
    const [reciepts, setReciepts] = useState<Array<recieptType>>([]);

    const reciept = {
        purchasedItems: [{
            id: 5,
            name: "Bread - Rolls, Rye",
            price: "$5.25"
        },
        {
            id: 6,
            name: "Kirsch - Schloss",
            price: "$2.69"
        },
        {
            id: 7,
            name: "Wine - White, Pelee Island",
            price: "$2.10"
        },
        {
            id: 8,
            name: "Trout - Rainbow, Frozen",
            price: "$8.73"
        },
        {
            id: 9,
            name: "Appetizer - Escargot Puff",
            price: "$3.32"
        },],
        date: new Date("now"),
        totalPrice: "$33.32"

    }

    useEffect(() => {

        setReciepts([reciept, reciept, reciept, reciept, reciept]);

        // getData('purchasedItemsStore').then((data) => {
        //     setPurchasedItems(data)
        // }).catch((error) => {
        //     console.log("Error" + error)
        // })
    }, [])

    return (
        <div className='recieptPage'>
            {reciepts.map((item) => <Reciept reciept={item} />)}
        </div>
    )
}
