import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class CharactersSection extends React.PureComponent {
  render() {
    if (this.props.charactersLoading) {
      return (
        <Grid item xs={12}>
          <Paper className={this.props.classStyle}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.characters.length === 0) { return null; }

    return (
      <Grid item xs={12}>
        <Paper className={this.props.classStyle}>
          {this.props.characters.map((character) => {
            return (
              <div>{character.name}</div>
            )
          })}
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  characters: store.characters.list,
  charactersLoading: store.characters.charactersLoading,
});


export default connect(mapStateToProps)(CharactersSection);
