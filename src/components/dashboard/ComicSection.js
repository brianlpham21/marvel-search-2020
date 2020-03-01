import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress, Link } from '@material-ui/core';

class ComicSection extends React.PureComponent {
  render() {
    if (this.props.comicsLoading) {
      return (
        <Paper className={`text-center ${this.props.classStyle}`}>
          <CircularProgress color="secondary" className="mt-2" />
        </Paper>
      )
    } else if (this.props.comics.length === 0) {
      if (this.props.noComics) {
        return (
          <Grid item xs={12}>
            <Paper className={`text-center ${this.props.classStyle}`}>
              No Comics Found.
            </Paper>
          </Grid>
        )
      }
      return null;
    }

    return (
      <Paper className={this.props.classStyle}>
        <h4>Comic Book Appearances</h4>
        <hr />
        <Grid container spacing={1}>
          {this.props.comics.map((comic) => {
            const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
            return (
              <Grid item sm={12} md={4} className="text-center">
                <Link
                  href={comic.urls[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={url} alt="comic_image" style={{ width: '100%' }}/>
                </Link>
                <h5 className="mt-2">{comic.title}</h5>
                <p className="p-2">{comic.description || 'No Description.'}</p>
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
  noComics: store.characters.noComics,
});

export default connect(mapStateToProps)(ComicSection);
