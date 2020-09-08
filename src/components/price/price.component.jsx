import React, { Component } from 'react';

import './price.styles.scss';

class Price extends Component {
  render() {
    const {
      inverted, 
      name, 
      body,
      frequency,
      monthly, 
      yearly,
    } = this.props;
    return (
      <div className={`price ${inverted? 'inverted':''}`}>
        <div className="pricing-row">
          <div className="pricing-col desc">
            <h2>{name}</h2>
            <p>{body}</p>
          </div>
          <div className="pricing-col right">
            <h3>{frequency === "month" ? monthly : yearly}</h3>
            <p className="grey">per {frequency}</p>
          </div>
        </div>
        <div className="pricing-row">
          <div className="pricing-col">
            <div className="pick-plan">
              Pick plan
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;