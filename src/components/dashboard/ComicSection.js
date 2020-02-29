import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

class ComicSection extends React.PureComponent {
  render() {
    if (this.props.comics.length === 0) { return null; }
    return (
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={this.props.classStyle}>
          Comic Section
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  comics: store.characters.comics,
});

export default connect(mapStateToProps)(ComicSection);
