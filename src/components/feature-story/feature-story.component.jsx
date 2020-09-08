import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg';

import './feature-story.styles.scss';

class FeatureStory extends Component {

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
      title, 
      by, 
      date,
      body,
      images,
    } = this.props;
    return (
      <div className="feature">
        <img
          className="feature-img" 
          src={this.getScreenWidth(images.desk, images.tablet, images.mobile)} 
          alt={title}
        />
        <div className="text-container">
          <p className="upper">Last Month's Featured Story</p>
          <h1 className="feature-title">{title}</h1>
          <div className="row">
            <p className="date grey">{date}</p>
            <p>by {by}</p>
          </div>
          <p className="grey">{body}</p>
          <div className="row">
            <Link to="#">Read the Story</Link>
            <Arrow className="feature-arrow"></Arrow>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureStory;