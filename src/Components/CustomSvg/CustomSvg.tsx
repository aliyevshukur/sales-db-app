import React from 'react';
import chekmark from '../../Images/checkmark.svg';
import customerSupport from '../../Images/customer-support.svg';
import shipping from '../../Images/shipping.svg';
import tropy from '../../Images/trophy.svg';

export default function CustomSvg({ name, color }: { name: string, color: string, }) {


    const style = color === 'white' ? { filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(321deg) brightness(104%) contrast(101%)" } : {};


    switch (name) {
        case "trophy":
            return (
                <img src={tropy} alt="trophy" style={style} />
            );
        case "checkmark":
            return (
                <img src={chekmark} alt="checkmark" style={style} />
            );
        case "customer-support":
            return (
                <img src={customerSupport} alt="customer-support" style={style} />
            );
        case "shipping":
            return (
                <img src={shipping} alt="shipping" style={style} />
            );

        default:
            return (
                <></>
            );
    }
}
