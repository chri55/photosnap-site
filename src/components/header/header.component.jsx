import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import openMenu from '../../assets/shared/mobile/menu.svg';
import closeMenu from '../../assets/shared/mobile/close.svg';
import logo from '../../assets/shared/desktop/logo.svg';

import './header.styles.scss';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

  }

  toggleMenu(e) {
    e.preventDefault();
    document.querySelectorAll('.menu-toggle').forEach(
      e => e.classList.toggle('inactive')
    );
    document.querySelectorAll('.header-links').forEach(
      e => e.classList.toggle('active')
    );
  }


  render() {
    return (
      <div className="header">
      <Link to='/'>
        <img className="main-logo" src={logo} alt="Photosnap"/>
      </Link>
        <div className="mobile menu-button">
          <img 
            id="open-menu" 
            className="mobile menu-toggle" 
            src={openMenu} 
            alt="Open Menu"
            onClick={(e) => this.toggleMenu(e)}
          />
          <img 
            id="close-menu" 
            className="mobile menu-toggle inactive" 
            src={closeMenu} 
            alt="Close Menu"
            onClick={(e) => this.toggleMenu(e)}
          />
        </div>
        <div className="header-links">
          <Link className="link" to="/stories">Stories</Link>
          <Link className="link" to="/features">Features</Link>
          <Link className="link" to="/pricing">Pricing</Link>
        </div>
        <div className="header-links get-invite">
          Get an invite
        </div>
      </div>
    );
  }
}

export default Header;