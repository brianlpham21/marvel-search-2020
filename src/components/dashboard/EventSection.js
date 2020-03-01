import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class EventSection extends React.PureComponent {
  render() {
    if (this.props.eventsLoading) {
      return (
        <Paper className={this.props.classStyle}>
          <CircularProgress color="secondary" className="mt-2" />
        </Paper>
      )
    } else if (this.props.events.length === 0) { return null; }

    return (
      <Paper className={this.props.classStyle}>
        <h4>Major Event Appearances</h4>
        <hr />
        <Grid container spacing={1}>
          {this.props.events.map((event) => {
            const url = `${event.thumbnail.path}.${event.thumbnail.extension}`;
            return (
              <Grid item xs={12} md={8} lg={4} className="text-center">
                <div>
                  <img src={url} alt="event_image" style={{ width: '50%' }}/>
                </div>
                <h6>{event.title}</h6>
                {event.description}
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
});

export default connect(mapStateToProps)(EventSection);
