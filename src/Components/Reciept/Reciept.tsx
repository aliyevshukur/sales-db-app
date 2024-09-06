import React from 'react'
import './Reciept.css'
import { itemType, recieptType } from '../../db'

interface Props {
    reciept: recieptType
}

export default function Reciept({ reciept }: Props) {

    return (
        <div className='reciept'>
            <div className='title'>SUPERMARKET</div>
            <div className='recieptInfo'>
                <div>Lorem Ipsum 258</div>
                <div>Cinty Index - 02025</div>
                <div>Tel: +456-468-839-02</div>
            </div>
            <div className='dots'></div>
            <div className='marketInfo'>
                <div className='marketInfoItem'><div>Cashier</div><div>#3</div></div>
                <div className='marketInfoItem'><div>Manager</div><div>Eric Steer</div> </div>
            </div>
            <div className='dots'></div>
            <div className='recieptBody'>
                <div className='recieptTitle'>
                    <div className='name'>Name</div>
                    <div className='qty'>Qty</div>
                    <div className='price'>Price</div>
                </div>
                {reciept.purchasedItems.map((item: itemType) => (
                    <div className='item'>
                        <div className='name'>{item.name}</div>
                        <div className='qty'>1</div>
                        <div className='price'>{item.price}</div>
                    </div>
                ))}
            </div>
            <div className='dots'></div>
            <div className="totalWrapper">
                <div>Sub Total</div>
                <div>{reciept.totalPrice}</div>
            </div>
            <div className='smallDots'></div>
            <div className='barcode'></div>
            <div className="bottomMessage">
                <div className="thankYou">THANK YOU!</div>
                <div className="seeYou">Glad to see you again!</div>
            </div>
        </div>
    )
}
