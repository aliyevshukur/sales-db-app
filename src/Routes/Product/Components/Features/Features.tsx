import * as React from "react";
import { FunctionComponent } from "react";
import "./Features.scss";

interface FeaturesProps {}

const Features: FunctionComponent<FeaturesProps> = () => {
  return (
    <ul className='features'>
      <li className='features-item'>
        <h3 className='features-item-title'>✦ Studio-Quality Sound</h3>
        <p className='features-item-desc'>
          Dual full-range drivers deliver crystal-clear highs and deep bass.
          <span>360° surround audio</span> fills any room with rich, balanced
          sound.
        </p>
      </li>
      <li className='features-item'>
        <h3 className='features-item-title'>✦ 20 Hours of Music</h3>
        <p className='features-item-desc'>
          High-capacity battery keeps your vibe going from sunrise to sunset.
          USB-C fast charging gives 4 hours of playback in just 15 minutes.
        </p>
      </li>
      <li className='features-item'>
        <h3 className='features-item-title'>✦ Bold Style</h3>
        <p className='features-item-desc'>
          Minimalist style available in 6 colors. Available in 6 materials —
          Carbon, Brushed Metal, Matte Black, Silicone, Gossy Plastic, Metal
          Mesh,
        </p>
      </li>
    </ul>
  );
};

export default Features;
