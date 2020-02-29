import React from 'react';
import { connect } from 'react-redux';
import { Paper, CircularProgress } from '@material-ui/core';

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
        {this.props.events.map((event) => {
          return (<div>{event.title}</div>);
        })}
      </Paper>
    );
  }
}

const mapStateToProps = store => ({
  events: store.characters.events,
  eventsLoading: store.characters.eventsLoading,
});

export default connect(mapStateToProps)(EventSection);
