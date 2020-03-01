import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class ComicSection extends React.PureComponent {
  render() {
    if (this.props.comicsLoading) {
      return (
        <Paper className={this.props.classStyle}>
          <CircularProgress color="secondary" className="mt-2" />
        </Paper>
      )
    } else if (this.props.comics.length === 0) { return null; }

    return (
      <Paper className={this.props.classStyle}>
        <h4>Comic Book Appearances</h4>
        <hr />
        <Grid container spacing={1}>
          {this.props.comics.map((comic) => {
            const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
            return (
              <Grid item xs={12} md={8} lg={4} className="text-center">
                <div>
                  <img src={url} alt="comic_image" style={{ width: '50%' }}/>
                </div>
                <h6>{comic.title}</h6>
                {comic.description}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = store => ({
  comics: store.characters.comics,
  comicsLoading: store.characters.comicsLoading,
});

export default connect(mapStateToProps)(ComicSection);
