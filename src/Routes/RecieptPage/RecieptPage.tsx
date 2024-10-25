import React, { useEffect, useState } from 'react'
import Reciept from '../../Components/Reciept/Reciept'
import { recieptType, getData, clearStore } from '../../db'
import "./RecieptPage.css"
import Button from '../../Components/Button/Button';


export default function RecieptPage() {
    const [reciepts, setReciepts] = useState<Array<recieptType>>([]);

    useEffect(() => {
        updateReciepts();
    }, [])

    function handleOnClick() {
        clearStore('recieptsStore')
            .then(() => {
                console.log("Reciept store cleared")
                updateReciepts();
            })
            .catch(() => {
                console.log("Failed to clear reciept store")
            })
    }

    function updateReciepts() {
        getData('recieptsStore')
            .then((data) => {
                setReciepts(data)
            })
            .catch((error) => {
                console.error("Error getting reciept data: " + error)
            })
    }

    if (reciepts.length === 0) {
        return <div className='recieptPage'>No reciepts yet</div>
    }

    return (
        <div className='recieptPage'>
            <Button title='clear all' onClick={handleOnClick} />
            <div className='reciepts'>
                {reciepts.map((item, index) => <Reciept key={index} reciept={item} />)}
            </div>
        </div>
    )
}
