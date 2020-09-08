import React, { Component } from 'react';

import {
  home,
  stories,
  benefits,

} from '../../assets';

import HeroSection from '../../components/hero-section/hero-section.component';
import StoriesList from '../../components/stories-list/stories-list.component';
import BenefitsList from '../../components/benefits/benefits-list.component';
import Footer from '../../components/footer/footer.component';

import './home.scss';

class Home extends Component {

  getScreenWidth(desktop, tablet, mobile) {
    const screenW = window.innerWidth;
    if (screenW > 800) {
      return desktop;
    } else if (screenW < 800 && screenW > 650) {
      return tablet
    } else {
      return mobile
    };
  }

  render() {
    const storiesPreview = [
      stories.theMountains,
      stories.sunsetCityscapes,
      stories.daysVoyage,
      stories.architecturals,
    ];
    const benefitsPreview = [
      benefits.responsive,
      benefits.noLimit,
      benefits.embed,
    ];
    return (
      <div className='homepage'>
        <HeroSection
          {...home.hero1}
        >
        </HeroSection>
        <HeroSection
          {...home.hero2}
        >
        </HeroSection>
        <HeroSection
          {...home.hero3}
        >
        </HeroSection>
        <StoriesList nodate stories={storiesPreview}></StoriesList>
        <BenefitsList benefits={benefitsPreview}></BenefitsList>
      </div>
    );
  }
}

export default Home;