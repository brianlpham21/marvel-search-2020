import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

class MainSection extends React.PureComponent {
  render() {
    if (Object.keys(this.props.selectedCharacter).length === 0) { return null; }
    return (
      <Grid item xs={12}>
        <Paper className={this.props.classStyle}>
          {this.props.selectedCharacter.name}
          <img src={this.props.selectedCharacter.thumbnail.path + '.' + this.props.selectedCharacter.thumbnail.extension} alt="hero" style={{ height: '100px' }} />
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  selectedCharacter: store.characters.selectedCharacter,
});

export default connect(mapStateToProps)(MainSection);
