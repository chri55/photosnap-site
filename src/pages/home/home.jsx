import React, { Component } from 'react';

import {
  homeHero1Desk,
  homeHero1Mob,
  homeHero1Tab,
  homeHero2Desk,
  homeHero2Mob,
  homeHero2Tab,
  homeHero3Desk,
  homeHero3Mob,
  homeHero3Tab,

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
          reverse
          inverted
          main
          img={this.getScreenWidth(
            homeHero1Desk,
            homeHero1Tab, 
            homeHero1Mob
          )}
          alt="Man on Dock"
          title="Create and Share Your Photo Stories"
          body="Photosnap is a platform for photographers and visual storytellers. We make it 
          easy to share photos, tell stories and connect with others."
          linkText="Get An Invite"
          linkTo="#"
        >
        </HeroSection>
        <HeroSection
          img={this.getScreenWidth(
            homeHero2Desk,
            homeHero2Tab, 
            homeHero2Mob
          )}
          alt="Laptop on Desk"
          title="Beautiful stories every time"
          body="We provide design templates to ensure your stories look terrific. Easily add 
          photos, text, embed maps and media from other networks. Then share your story 
          with everyone."
          linkText="View the stories"
          linkTo="/stories"
        >
        </HeroSection>
        <HeroSection
          reverse
          main
          img={this.getScreenWidth(
            homeHero3Desk,
            homeHero3Tab, 
            homeHero3Mob
          )}
          alt="Photographer"
          title="Designed for everyone"
          body="Photosnap can help you create stories that resonate with your audience.  Our 
          tool is designed for photographers of all levels, brands, businesses you name it."
          linkText="View the stories"
          linkTo="/stories"
        >
        </HeroSection>
        <StoriesList stories={storiesPreview}></StoriesList>
        <BenefitsList benefits={benefitsPreview}></BenefitsList>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;