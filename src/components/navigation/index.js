import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

class NavigationContainer extends React.PureComponent {
  render() {
    const handleInput = (key, value) => {
      if (key === 13) {
        console.log('search term against characters');
        this.props.dispatch({ type: 'CLEAR_SEARCH_TERM' })
      } else {
        this.props.dispatch({ type: 'UPDATE_SEARCH_TERM', payload: value })
      };
    }

    return (
      <Navigation searchTerm={this.props.searchTerm} onChange={(key, value) => handleInput(key, value)} />
    );
  }
}

const mapStateToProps = store => ({
  searchTerm: store.search.searchTerm,
});

export default connect(mapStateToProps)(NavigationContainer);
