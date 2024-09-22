import React from 'react'
import "./AboutItem.scss";


interface Props {
    title: string,
    desc: string,
    image: string,
    imagePosition?: "left" | "right",
}
export default function AboutItem({ title, desc, image, imagePosition = "left" }: Props) {


    return (
        <div className="about-section-2-item">
            {imagePosition === "left" && <img src={image} alt="" className='about-section-2-item-image' />}

            <div className="about-section-2-item-text">
                <div className="about-section-2-item-text-title">{title}</div>
                <p className="about-section-2-item-text-desc">
                    {desc}
                </p>
            </div>

            {imagePosition === "right" && <img src={image} alt="" className='about-section-2-item-image' />}

        </div >
    )
}
