import React from 'react';
import { connect } from 'react-redux';

class YouTubeSection extends React.PureComponent {
  render() {
    return (
      <div>Youtube Section</div>
    );
  }
}

export default connect()(YouTubeSection);
