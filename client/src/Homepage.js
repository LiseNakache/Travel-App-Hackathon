import React from 'react';
import CreateEventForm from './CreateEventForm'
import EventsListBox from './EventsListBox'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
  }
  createEvent(title) {
    var event = {
      title : title,
    }
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state)
  }




  render() {
    return (
      <div className="main-container">
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>
        <div className="EventsListBox">
        <EventsListBox event={this.state.events}/>
        </div>
      </div>
    );
  }
}

export default Homepage;