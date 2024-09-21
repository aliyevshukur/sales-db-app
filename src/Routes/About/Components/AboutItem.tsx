import React from 'react'
import SiteLogo from '../../../Images/site-logo.png';
import "./AboutItem.scss"


interface Props {
    title: string,
    desc: string,
}
export default function AboutItem({ title, desc }: Props) {
    return (
        <div className="about-section-2-item">
            <img src={SiteLogo} alt="" className='about-section-2-item-image' />

            <div className="about-section-2-item-text">
                <div className="about-section-2-item-text-title">{title}</div>
                <p className="about-section-2-item-text-desc">
                    {desc}
                </p>
            </div>
        </div >
    )
}
