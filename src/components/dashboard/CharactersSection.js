import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress, Button } from '@material-ui/core';
import { getCharacterComics, getCharacterEvents, getYouTubeVideos } from '../../actions/characters';

class CharactersSection extends React.PureComponent {
  render() {
    const handleClick = (name, id) => {
      this.props.dispatch({ type: 'SET_SELECTED_CHARACTER', payload: id });
      /* Make other calls for same character */
      getCharacterComics(id);
      getCharacterEvents(id);
      getYouTubeVideos(name);
      this.props.dispatch({ type: 'CLEAR_SEARCH_TERM' });
    }

    if (this.props.charactersLoading) {
      return (
        <Grid item xs={12}>
          <Paper className={this.props.classStyle}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.characters.length === 0) {
      if (this.props.noCharacters) {
        return (
          <Grid item xs={12}>
            <Paper className={this.props.classStyle}>
              No Characters Found.
            </Paper>
          </Grid>
        )
      }
      return null;
    }

    return (
      <Grid item xs={12}>
        <Paper className={this.props.classStyle}>
          <h6>Please Select a Character:</h6>
          {this.props.characters.map((character) => {
            return (
              <Button
                variant="outlined"
                color="secondary"
                className="ml-1 mb-1"
                onClick={() => handleClick(character.name, character.id)}
              >
                {character.name}
              </Button>
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
  noCharacters: store.characters.noCharacters,
});


export default connect(mapStateToProps)(CharactersSection);
