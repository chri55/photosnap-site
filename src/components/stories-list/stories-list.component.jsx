import React, { Component } from 'react';

import Story from '../story/story.component';

import './stories-list.styles.scss';

class StoriesList extends Component {

  getScreenWidth() {

  }

  render() {
    return (
      <div className="stories-list">
        {this.props.stories.map(story => (
          <Story nodate={this.props.nodate} {...story}></Story>
        ))}
      </div>
    );
  }
}

export default StoriesList;