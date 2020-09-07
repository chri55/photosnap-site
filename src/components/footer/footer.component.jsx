import React, { Component } from 'react';

import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg';

import {ReactComponent as Facebook} from '../../assets/shared/desktop/facebook.svg';
import {ReactComponent as Youtube} from '../../assets/shared/desktop/youtube.svg';
import {ReactComponent as Twitter} from '../../assets/shared/desktop/twitter.svg';
import {ReactComponent as Pinterest} from '../../assets/shared/desktop/pinterest.svg';
import {ReactComponent as Instagram} from '../../assets/shared/desktop/instagram.svg';


import './footer.styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <Logo className="main-logo-footer"></Logo>
            <div className="media-links">
              <Facebook className="media-link" id="fb"></Facebook>
              <Youtube className="media-link" id="yt"></Youtube>
              <Twitter className="media-link" id="twt"></Twitter>
              <Pinterest className="media-link" id="pnt"></Pinterest>
              <Instagram className="media-link" id="ig"></Instagram>
            </div>
          </div>
          <div className="footer-col"></div>
          <div className="footer-col"></div>
        </div>
      </div>
    );
  }
}

export default Footer;