import React, { Component } from 'react';

import {
  pricing,
} from '../../assets';

import HeroSection from '../../components/hero-section/hero-section.component';
import PricingToggle from '../../components/pricing-toggler/pricing-toggler.component';
import Compare from '../../components/compare/compare.component';
import BetaAd from '../../components/beta-ad/beta-ad.component';

class Pricing extends Component {
  render() {
    return (
      <div>
        <HeroSection {...pricing.hero}></HeroSection>
        <PricingToggle></PricingToggle>
        <Compare></Compare>
        <BetaAd></BetaAd>
      </div>
    );
  }
}

export default Pricing;