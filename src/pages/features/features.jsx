import React, { Component } from 'react';

import BenefitsList from '../../components/benefits/benefits-list.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import BetaAd from '../../components/beta-ad/beta-ad.component';

import { 
  benefits,
} from '../../assets';

class Features extends Component {
  render() {
    const row1 = [
      benefits.responsive,
      benefits.noLimit,
      benefits.embed,
    ];
    const row2 = [
      benefits.customDomain,
      benefits.exposure,
      benefits.dragDrop,
    ];

    return (
      <div className="features">
        <HeroSection {...benefits.hero}></HeroSection>
        <BenefitsList benefits={row1}></BenefitsList>
        <BenefitsList benefits={row2}></BenefitsList>
        <BetaAd></BetaAd>
      </div>
    );
  }
}

export default Features;