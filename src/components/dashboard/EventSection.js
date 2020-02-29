import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

class EventSection extends React.PureComponent {
  render() {
    if (this.props.eventsLoading) {
      return (
        <Grid item xs={12}>
          <Paper className={this.props.classStyle}>
            <CircularProgress color="secondary" className="mt-2" />
          </Paper>
        </Grid>
      )
    } else if (this.props.events.length === 0) { return null; }

    return (
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={this.props.classStyle}>
          {this.props.events.map((event) => {
            return (<div>{event.title}</div>);
          })}
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  events: store.characters.events,
  eventsLoading: store.characters.eventsLoading,
});

export default connect(mapStateToProps)(EventSection);
