import React from 'react';
import { connect } from 'react-redux';

class MainSection extends React.PureComponent {
  render() {
    return (
      <div>Main & Instructional Section</div>
    );
  }
}

export default connect()(MainSection);
