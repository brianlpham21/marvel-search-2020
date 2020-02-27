import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Navigation extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Navigation
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigation;
