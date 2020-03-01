import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

class MainSection extends React.PureComponent {
  render() {
    if (Object.keys(this.props.selectedCharacter).length === 0) { return null; }
    const { selectedCharacter } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={`d-flex ${this.props.classStyle}`}>
          <div>
            <img
              src={selectedCharacter.thumbnail.path + '.' + selectedCharacter.thumbnail.extension}
              alt="hero"
              style={{ width: '100%' }}
            />
          </div>
          <div className="p-3 text-left">
            <h4>{selectedCharacter.name} - Official Marvel ID: {selectedCharacter.id}</h4>
            <hr />
            <p>{selectedCharacter.description || 'No Description'}</p>
            <div>
              <h5>Statistics:</h5>
              <div>Total Events: {selectedCharacter.events.available}</div>
              <div>Total Comics: {selectedCharacter.comics.available}</div>
              <div>Total Series: {selectedCharacter.series.available}</div>
              <div>Total Stories: {selectedCharacter.series.available}</div>
            </div>
            <div className="mt-2">
              <h5>Read More:</h5>
              {selectedCharacter.urls.map((link) => {
                return (
                  <div>
                    <a href={link.url} rel="noopenner noreferrer" target="_blank">
                      {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  selectedCharacter: store.characters.selectedCharacter,
});

export default connect(mapStateToProps)(MainSection);
