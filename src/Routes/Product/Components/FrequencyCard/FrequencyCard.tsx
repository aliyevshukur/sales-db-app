import React from "react";
import "./FrequencyCard.scss";

function FrequencyCard() {
  return (
    <div className='frequencyCard'>
      <div className='frequencyCard-title'>Frequency response</div>
      <div className='frequencyCard-subtitle'>Wide range</div>
      <div className='frequencyCard-hertz'>
        <span>20HZ</span>
        <div className='frequencyCard-visual frequency-animation'>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <span>20kHZ</span>
      </div>
    </div>
  );
}
export default FrequencyCard;
