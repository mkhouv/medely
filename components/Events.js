import React, { Component } from 'react';

class Events extends Component {
  componentDidMount() {
    let date = this.props.date.format('MMDDYYYY');
    this.props.getEvents(date);
  }

  componentWillReceiveProps(nextProps) {
    let nextDate = nextProps.date.format('MMDDYYYY')
    if (this.props.date.format('MMDDYYYY') !== nextProps.date.format('MMDDYYYY') || this.props.eventList.length !== nextProps.eventList.length) {
      this.props.getEvents(nextDate);
    }
  }

  render() {
    const events = [];

    this.props.eventList.forEach(event => {
      events.push(
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{event.title}<button type="button" className="close" onClick={this.props.deleteEvent}>&times;</button></h4>
            <h6 className="card-subtitle mb-2 text-muted">Start Time: {event.start}</h6>
            <h6 className="card-subtitle mb-2 text-muted">End Time: {event.end}</h6>
          </div>
        </div>
      );
    });

    return (
      <div>
        {events}
      </div>
    );
  };
}

export default Events;