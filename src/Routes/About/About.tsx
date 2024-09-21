import React from 'react'
import './About.scss';
import AboutDecor1 from '../../Images/about-decor1.png';
import AboutDecor2 from '../../Images/about-decor2.png';
import SiteLogo from '../../Images/site-logo.png';
import Wave from './Components/Wave';
import AboutItem from './Components/AboutItem';

export default function About() {

    const aboutItemData = {
        title: "About Us",
        desc: "At Planet Resonance, we are passionate about sound. Founded by a team of audio enthusiasts and technology innovators, we specialize in delivering cutting-edge speaker systems that transform your listening experience. Our mission is to bridge the gap between exceptional sound quality and sleek design, ensuring that every note is heard in its purest form."
    }

    return (
        <div className='about'>
            <img src={AboutDecor1} alt="about" className="about-decor-1" />
            <img src={AboutDecor2} alt="about" className="about-decor-2" />

            <div className="about-section-1" >
                <div className="about-section-1-text">
                    <h3 className='about-section-1-text-upper-title'>Hear Every Detail, Feel Every Beat.</h3>
                    <h1 className='about-section-1-text-title'>PLANET RESONANCE</h1>
                    <p className='about-section-1-text-desc'>
                        Our speakers are powered by cutting-edge audio technology that
                        delivers mind-blowing sound that wraps you in every
                        <div className="about-section-1-text-desc-bold">audio like never before</div>
                    </p>
                </div>
            </div>
            <div className="about-section-2">
                <Wave width={"100%"} height={"100%"} />

                <AboutItem title={aboutItemData.title} desc={aboutItemData.desc} />

            </div>
        </div>
    )
}
