import React from 'react'
import '../../_animations.scss'
import './HomeBenefits.scss'
import HomeBenefitsItem from './HomeBenefitsItem/HomeBenefitsItem'


export default function HomeBenefits() {
    return (
        <>
            <div className='homeBenefits pulseGlow'>
                <HomeBenefitsItem image='trophy' title='High quality' subtitle='Premium build quality ' />
                <HomeBenefitsItem image='checkmark' title=' Warrany Protection' subtitle='Over 2 years' />
                <HomeBenefitsItem image='shipping' title='Free shippig' subtitle='Order over $150' />
                <HomeBenefitsItem image='customer-support' title='24/7 support ' subtitle='Dedicated support' />
            </div>
            <div className="seperator-bar carbon-fiber"></div>
        </>

    )
}
