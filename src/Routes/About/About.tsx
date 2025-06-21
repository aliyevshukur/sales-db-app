import React from 'react';
import aboutimg2 from '../../Images/about-image-2.gif';
import aboutimg1 from '../../Images/site-logo-2.png';
import './About.scss';
import AboutItem from './Components/AboutItem';
import Wave from './Components/Wave';

export default function About() {

    const aboutItemsData = [
        {
            title: "About Us",
            desc: "At Rosenance, we are passionate about sound. Founded by a team of audio enthusiasts and technology innovators, we specialize in delivering cutting-edge speaker systems that transform your listening experience. Our mission is to bridge the gap between exceptional sound quality and sleek design, ensuring that every note is heard in its purest form.",
            img: aboutimg1,
        },
        {
            title: "At the edge of audio innovation.",
            desc: "Our speakers use next-gen acoustic wave shaping and AI-driven sound optimization to adapt in real time to your space. Powered by magneto-acoustic transducers and ultra-low latency spatial processing, every sound is delivered with stunning clarity, deep immersive bass, and 360° surround fidelity. This isn’t just sound—it’s engineered atmosphere.",
            img: aboutimg2,

        }
    ]

    return (
        <div className='about'>
            <div className="about-section-1" >
                <div className="about-section-1-text">
                    <h3 className='about-section-1-text-upper-title'>Hear Every Detail, Feel Every Beat.</h3>
                    <h1 className='about-section-1-text-title'>ROSENANCE</h1>
                    <p className='about-section-1-text-desc'>
                        Our speakers are powered by cutting-edge audio technology that
                        delivers mind-blowing sound that wraps you in every
                        <span className="about-section-1-text-desc-bold"> audio like never before</span>
                    </p>
                </div>
                <Wave width={"100%"} height={"100%"} />
            </div>
            <div className="about-section-2">
                {aboutItemsData.map((aboutItemData, key) => {

                    return <AboutItem key={aboutItemData.title}
                        title={aboutItemData.title}
                        desc={aboutItemData.desc}
                        image={aboutItemData.img}
                        imagePosition={key === 0 ? "left" : "right"}
                    />
                })}
            </div>
        </div>
    )
}
