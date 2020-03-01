import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class YouTubeSection extends React.PureComponent {
  render() {
    if (this.props.videosLoading) {
      return (
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={this.props.classStyle}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.ytVideos.length === 0) { return null; }

    if (this.props.ytVideos.length === 0) { return null; }
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={this.props.classStyle}>
          {this.props.ytVideos.map((video) => {
            const url = video.snippet.thumbnails.default.url;
            return (
              <div>
                <div>
                  <img src={url} alt="event_image" style={{ width: '50%' }}/>
                </div>
                <div>{video.snippet.title}</div>
                {video.snippet.description}
              </div>
            )
          })}
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  ytVideos: store.characters.ytVideos,
  videosLoading: store.characters.videosLoading,
});

export default connect(mapStateToProps)(YouTubeSection);
