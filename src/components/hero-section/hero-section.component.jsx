import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import arrow from '../../assets/shared/desktop/arrow.svg';

import './hero-section.styles.scss';

class HeroSection extends Component {

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
    const {
      reverse, 
      inverted, 
      images,
      alt, 
      title, 
      body,
      linkText,
      linkTo,
      main,
    } = this.props;
    return (
      <div className={`hero-section ${inverted?'inverted':''} ${reverse?'reverse':''} ${main?'main':''}`}>
        <div className="hero-img">
          <img 
            src={this.getScreenWidth(images.desk, images.tablet, images.mobile)} 
            alt={`${alt}`}
          />
        </div>
        <div className="text">
          <h2 className="headline">{`${title}`}</h2>
          <p className="body-text">{`${body}`}</p>
          {linkText && 
            <Link 
              to={`${linkTo}`}
            >
            {`${linkText}`}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
            </Link>
          }
        </div>

        
      </div>
    );
  }
}

export default HeroSection;