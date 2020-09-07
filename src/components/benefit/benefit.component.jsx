import React, { Component } from 'react';

import './benefit.styles.scss';

class Benefit extends Component {
  render() {
    return (
      <div className="benefit">
        <img src={this.props.images.svg} alt={this.props.name}/>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Benefit;