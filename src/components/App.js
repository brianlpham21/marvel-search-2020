import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './navigation';
import Dashboard from './dashboard';
import About from './about';

import './styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
