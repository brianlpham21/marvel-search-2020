import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationContainer from './navigation';
import Dashboard from './dashboard';
import About from './about';

import './styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationContainer />
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default connect()(App);
