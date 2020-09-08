import React, { Component } from 'react';

import FeatureStory from '../../components/feature-story/feature-story.component';
import StoriesList from '../../components/stories-list/stories-list.component';

import {
  stories, 
} from '../../assets';

class Stories extends Component {

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

    const row1 = [
      stories.theMountains,
      stories.sunsetCityscapes,
      stories.daysVoyage,
      stories.architecturals,
    ];
    const row2 = [
      stories.worldTour,
      stories.unforeseen,
      stories.king,
      stories.trip,
    ];
    const row3 = [
      stories.rage,
      stories.running, 
      stories.behind,
      stories.calm,
    ];
    const row4 = [
      stories.milky,
      stories.darkForest,
      stories.somwarpet,
      stories.land,
    ];
    return (
      <div>
        <FeatureStory {...stories.moonFeature}></FeatureStory>
        <StoriesList nodate={false} stories={row1}></StoriesList>
        <StoriesList nodate={false} stories={row2}></StoriesList>
        <StoriesList nodate={false} stories={row3}></StoriesList>
        <StoriesList nodate={false} stories={row4}></StoriesList>

      </div>
    );
  }
}

export default Stories;