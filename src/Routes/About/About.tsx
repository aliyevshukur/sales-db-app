import React from 'react';
import AboutDecor1 from '../../Images/about-decor1.png';
import AboutDecor2 from '../../Images/about-decor2.png';
import SiteLogo from '../../Images/site-logo.png';
import './About.scss';
import AboutItem from './Components/AboutItem';
import Wave from './Components/Wave';

export default function About() {

    const aboutItemsData = [
        {
            title: "About Us",
            desc: "At Planet Resonance, we are passionate about sound. Founded by a team of audio enthusiasts and technology innovators, we specialize in delivering cutting-edge speaker systems that transform your listening experience. Our mission is to bridge the gap between exceptional sound quality and sleek design, ensuring that every note is heard in its purest form."
        },
        {
            title: "Our Team",
            desc: "Our commitment to sustainability means that we prioritize eco-friendly practices in our manufacturing process, ensuring that our impact on the planet is as minimal as possible. Join us on our mission to elevate sound and embrace the future of audio technology. Discover the difference with Planet Resonance—where every note matters."
        }
    ]

    return (
        <div className='about'>
            {/* <img src={AboutDecor1} alt="about" className="about-decor-1" />
            <img src={AboutDecor2} alt="about" className="about-decor-2" /> */}

            <div className="about-section-1" >
                <div className="about-section-1-text">
                    <h3 className='about-section-1-text-upper-title'>Hear Every Detail, Feel Every Beat.</h3>
                    <h1 className='about-section-1-text-title'>PLANET RESONANCE</h1>
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
                        image={SiteLogo}
                        imagePosition={key % 2 === 0 ? "left" : "right"}
                    />
                })}
            </div>
        </div>
    )
}
