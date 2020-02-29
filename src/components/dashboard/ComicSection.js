import React from 'react';
import { connect } from 'react-redux';
import { Paper, CircularProgress } from '@material-ui/core';

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
        {this.props.comics.map((comic) => {
          return (<div>{comic.title}</div>);
        })}
      </Paper>
    );
  }
}

const mapStateToProps = store => ({
  comics: store.characters.comics,
  comicsLoading: store.characters.comicsLoading,
});

export default connect(mapStateToProps)(ComicSection);
