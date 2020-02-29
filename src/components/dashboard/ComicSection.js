import React from 'react';
import { connect } from 'react-redux';

class ComicSection extends React.PureComponent {
  render() {
    return (
      <div>Comic Section</div>
    );
  }
}

export default connect()(ComicSection);
