import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

import {
  ReactComponent as Arrow
} from '../../assets/shared/desktop/arrow copy.svg';

import './beta-ad.styles.scss';

class BetaAd extends Component {
  render() {
    return (
      <div className="ad">
        <div className="color-style">
        </div>
        <div className="beta-text">
          <h1 className="beta-title">We're in beta. Get your invite today!</h1>
          <div className="link">
            <Link to="#">Get An Invite</Link>
            <Arrow></Arrow>
          </div>
        </div>
      </div>
    );
  }
}

export default BetaAd;