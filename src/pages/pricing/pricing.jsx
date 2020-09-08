import React, { Component } from 'react';

import {
  pricing,
} from '../../assets';

import HeroSection from '../../components/hero-section/hero-section.component';
import PricingToggle from '../../components/pricing-toggler/pricing-toggler.component';

class Pricing extends Component {
  render() {
    return (
      <div>
        <HeroSection {...pricing.hero}></HeroSection>
        <PricingToggle></PricingToggle>
      </div>
    );
  }
}

export default Pricing;