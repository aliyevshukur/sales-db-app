import React from 'react'
import CustomSvg from '../../CustomSvg/CustomSvg'
import './HomeBenefitsItem.scss'
export default function HomeBenefitsItem({ image, title, subtitle }: { image: string, title: string, subtitle: string }) {
  return (
    <div className='homeBenefitsItem'>
      <CustomSvg name={image} color="white" />
      <div className="homeBenefitsItem-text">
        <div className="homeBenefitsItem-text-title">
          {title}
        </div>

        <div className="homeBenefitsItem-text-subtitle">
          {subtitle}
        </div>
      </div>
    </div>
  )
}
