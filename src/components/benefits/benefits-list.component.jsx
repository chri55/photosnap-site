import React, { Component } from 'react';

import Benefit from '../benefit/benefit.component';

import './benefits-list.styles.scss';

class BenefitsList extends Component {
  render() {
    return (
      <div className="benefits-row">
        {this.props.benefits.map(benefit => (
          <Benefit {...benefit}></Benefit>
        ))}   
      </div>
    );
  }
}

export default BenefitsList;