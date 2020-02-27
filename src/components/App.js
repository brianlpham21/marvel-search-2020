import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './navigation';
import Dashboard from './dashboard';
import About from './about';

import './styles/theme.scss';

class App extends React.PureComponent {
  render() {
    const handleInput = (key, value) => {
      if (key === 13) {
        this.props.dispatch({ type: 'CLEAR_SEARCH_TERM' })
      } else {
        this.props.dispatch({ type: 'UPDATE_SEARCH_TERM', payload: value })
      };
    }

    return (
      <Router>
        <React.Fragment>
          <Navigation searchTerm={this.props.searchTerm} onChange={(key, value) => handleInput(key, value)} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  searchTerm: store.search.searchTerm,
});

export default connect(mapStateToProps)(App);
