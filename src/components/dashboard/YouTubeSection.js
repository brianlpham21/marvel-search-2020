import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

class YouTubeSection extends React.PureComponent {
  render() {
    if (this.props.ytVideos.length === 0) { return null; }
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={this.props.classStyle}>
          YouTube Section
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  ytVideos: store.characters.ytVideos,
});

export default connect(mapStateToProps)(YouTubeSection);
