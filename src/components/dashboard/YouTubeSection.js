import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress, Button } from '@material-ui/core';

class YouTubeSection extends React.PureComponent {
  render() {
    const handleClick = (title, id) => {
      this.props.dispatch({ type: 'SET_YOUTUBE_VIDEO', payload: { title, id } });
      this.props.dispatch({ type: 'OPEN_VIDEO_MODAL' });
    }

    if (this.props.videosLoading) {
      return (
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={`text-center ${this.props.classStyle}`}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.ytVideos.length === 0) { return null; }

    if (this.props.ytVideos.length === 0) { return null; }
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={this.props.classStyle}>
          <h5>YouTube Videos</h5>
          {this.props.ytVideos.map((video) => {
            const url = video.snippet.thumbnails.high || video.snippet.thumbnails.medium || video.snippet.thumbnails.default;
            return (
              <div className="text-center">
                <hr />
                <Button style={{ width: '100%' }} onClick={() => handleClick(video.snippet.title, video.id.videoId)}>
                  <img src={url.url} alt="event_image" style={{ width: '100%' }} />
                </Button>
                <h5 className="mt-2">{video.snippet.title}</h5>
                <p style={{ overflow: 'auto' }}>{video.snippet.description || 'No Description.'}</p>
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
