import React, { Component } from 'react';

import {
  ReactComponent as Check
} from '../../assets/pricing/desktop/check.svg';

import './compare.styles.scss';

class Compare extends Component {

  getScreenWidth() {
    return window.innerWidth < 800;
  }

  render() {
    return (
      <div className="compare-section">
        {!this.getScreenWidth() && <h2 className="compare-title">Compare</h2>}
        <div className="compare-row top">
          <span>The Features</span>
          {!this.getScreenWidth() &&
            <div className="plan-spec">
              <span>Basic</span>
              <span>Pro</span>
              <span>Business</span>
            </div>
          }
        </div>
        <hr className="main"/>
        <div className="compare-row">
          <span>Unlimited Story Posting</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span><Check></Check></span>
            <span><Check></Check></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Unlimited Photo Upload</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span><Check></Check></span>
            <span><Check></Check></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Embedding Custom Content</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span><Check></Check></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Customize Metadata</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span><Check></Check></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Advanced Metrics</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Photo Downloads</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Search Engine Indexing</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
        <div className="compare-row">
          <span>Custom Analytics</span>
          {this.getScreenWidth() && 
          <div className="plan-spec mobile">
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
          </div> }
          <div className="checks">
            <span></span>
            <span></span>
            <span><Check></Check></span>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Compare;