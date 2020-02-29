import React from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/characters';

class MainSection extends React.PureComponent {
  componentDidMount() {
    getDogs();
  }

  render() {
    return (
      <div>Main & Instructional Section</div>
    );
  }
}

export default connect()(MainSection);
