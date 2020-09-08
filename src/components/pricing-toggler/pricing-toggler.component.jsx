import React, { Component } from 'react';

import {
  pricing,
} from '../../assets';

import Price from '../price/price.component';

import './pricing-toggler.styles.scss';

class PricingToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 'month',
    }
  }

  pricingToggleSwitch(e) {
    //e.preventDefault();
    if (this.state.frequency === 'month') {
      this.setState({frequency:'year'});
    } else {
      this.setState({frequency: 'month'});
    }
  }

  render() {
    const prices = [
      pricing.basic,
      pricing.pro,
      pricing.business,
    ];
    return (
      <div>
        <div className="switch-box">
          <span className="selected toggle-name">Monthly</span>
          <label className="switch" onChange={(e) => this.pricingToggleSwitch(e)}>
            <input 
              
              type="checkbox" 
              name="pricetoggle" 
              id="toggleswitch"
            />
            <span className="slider"></span>
          </label>
          <span className="toggle-name">Yearly</span>
        </div> 
        <div className="pricing-toggler">
          
        
          {prices.map(plan => (
            <Price frequency={this.state.frequency} {...plan}></Price>
          ))}
        </div>
      </div>
      
    );
  }
}

export default PricingToggle;