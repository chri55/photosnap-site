import React, { Component } from 'react';

import arrow from '../../assets/shared/desktop/arrow.svg';

import './story.styles.scss';

class Story extends Component {
  getScreenWidth(desktop, mobile) {
    if (window.innerWidth > 800) {
      return desktop;
    } else {
      return mobile;
    }
  }
  
  render() {
    const {
      images,
      by,
      title,
      date, 
      nodate,
    } = this.props;
    return (
      <div 
        className="story"
        style={{
          backgroundImage: `url(${
            this.getScreenWidth(images.desk, images.mobile)
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="story-inner">
          {!nodate && <p className="date">{date}</p>}
          <h3 className="story-title">{title}</h3>
          <p className="story-by">by {by}</p>
          <hr></hr>
          <div className="read">
            <a href="#">Read the story</a>
            <img src={`${arrow}`} alt="arrow right"/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Story;