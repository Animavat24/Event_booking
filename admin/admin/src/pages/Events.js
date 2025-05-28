import React from 'react';
import EventList from '../components/events/EventList';
import '../Assets/css/Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <EventList />
    </div>
  );
};

export default Events;