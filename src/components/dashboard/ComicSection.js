import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class ComicSection extends React.PureComponent {
  render() {
    if (this.props.comicsLoading) {
      return (
        <Grid item xs={12}>
          <Paper className={this.props.classStyle}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.comics.length === 0) { return null; }

    return (
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={this.props.classStyle}>
          {this.props.comics.map((comic) => {
            return (<div>{comic.title}</div>);
          })}
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  comics: store.characters.comics,
  comicsLoading: store.characters.comicsLoading,
});

export default connect(mapStateToProps)(ComicSection);
