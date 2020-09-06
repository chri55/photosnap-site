import React, { Component } from 'react';

import HeroSection from '../../components/hero-section/hero-section.component';

import hero1Desktop from '../../assets/home/desktop/create-and-share.jpg';
import hero1Tablet from '../../assets/home/tablet/create-and-share.jpg';
import hero1Mobile from '../../assets/home/mobile/create-and-share.jpg';

import hero2Desktop from '../../assets/home/desktop/beautiful-stories.jpg';
import hero2Tablet from '../../assets/home/tablet/beautiful-stories.jpg';
import hero2Mobile from '../../assets/home/mobile/beautiful-stories.jpg';

import hero3Desktop from '../../assets/home/desktop/designed-for-everyone.jpg';
import hero3Tablet from '../../assets/home/tablet/designed-for-everyone.jpg';
import hero3Mobile from '../../assets/home/mobile/designed-for-everyone.jpg';


import './home.scss';

class Home extends Component {

  getScreenWidth(desktop, tablet, mobile) {
    const screenW = window.innerWidth;
    if (screenW > 800) {
      return desktop;
    } else if (screenW < 800 && screenW > 400) {
      return tablet
    } else {
      return mobile
    };
  }

  render() {
    const screenSize = this.getScreenWidth();
    return (
      <div className='homepage'>
        <HeroSection
          reverse
          inverted
          main
          img={this.getScreenWidth(
            hero1Desktop,
            hero1Tablet, 
            hero1Mobile
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
            hero2Desktop,
            hero2Tablet, 
            hero2Mobile
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
            hero3Desktop,
            hero3Tablet, 
            hero3Mobile
          )}
          alt="Photographer"
          title="Designed for everyone"
          body="Photosnap can help you create stories that resonate with your audience.  Our 
          tool is designed for photographers of all levels, brands, businesses you name it."
          linkText="View the stories"
          linkTo="/stories"
        >
        </HeroSection>
      </div>
    );
  }
}

export default Home;