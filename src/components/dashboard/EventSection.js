import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress, Link } from '@material-ui/core';

class EventSection extends React.PureComponent {
  render() {
    if (this.props.eventsLoading) {
      return (
        <Paper className={`text-center ${this.props.classStyle}`}>
          <CircularProgress color="secondary" className="mt-2" />
        </Paper>
      )
    } else if (this.props.events.length === 0) {
      if (this.props.noEvents) {
        return (
          <Grid item xs={12}>
            <Paper className={`text-center ${this.props.classStyle}`}>
              No Events Found.
            </Paper>
          </Grid>
        )
      }
      return null;
    }

    return (
      <Paper className={this.props.classStyle}>
        <h4>Major Event Appearances</h4>
        <hr />
        <Grid container spacing={1}>
          {this.props.events.map((event) => {
            const url = `${event.thumbnail.path}.${event.thumbnail.extension}`;
            return (
              <Grid item xs={12} md={8} lg={4} className="text-center">
                <Link
                  href={event.urls[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={url} alt="event_image" style={{ width: '100%' }}/>
                </Link>
                <h5 className="mt-2">{event.title}</h5>
                <p className="p-2">{event.description || 'No Description.'}</p>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = store => ({
  events: store.characters.events,
  eventsLoading: store.characters.eventsLoading,
  noEvents: store.characters.noEvents,
});

export default connect(mapStateToProps)(EventSection);
