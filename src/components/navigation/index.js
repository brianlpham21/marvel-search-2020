import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { getCharacters } from '../../actions/characters';

class NavigationContainer extends React.PureComponent {
  render() {
    const handleInput = (value) => {
      if (value.length > 1) {
        getCharacters(value);
        this.props.dispatch({ type: 'UPDATE_SEARCH_TERM', payload: value })
      };
    }

    const handleClear = () => {
      this.props.dispatch({ type: 'CLEAR_SEARCH_TERM' })
      this.props.dispatch({ type: 'CLEAR_CHARACTERS_LIST' })
    }

    return (
      <Navigation
        searchTerm={this.props.searchTerm}
        onChange={(value) => handleInput(value)}
        onClear={() => handleClear()}
      />
    );
  }
}

const mapStateToProps = store => ({
  searchTerm: store.search.searchTerm,
});

export default connect(mapStateToProps)(NavigationContainer);
