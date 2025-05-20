import React, { useState, useEffect } from 'react';
import { formatDate } from '../../utils/dateFormatter';
import Table from '../common/Table';
import Button from '../common/Button';
import Modal from '../common/Modal';
import EventForm from './EventForm';
import '../../Assets/css/EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Mock data - replace with API call
    const mockEvents = [
      { id: 1, title: 'Tech Conference', date: '2023-07-15', location: 'Convention Center', capacity: 200 },
      { id: 2, title: 'Product Workshop', date: '2023-07-20', location: 'Meeting Room A', capacity: 50 },
      { id: 3, title: 'Annual Meeting', date: '2023-08-05', location: 'Grand Ballroom', capacity: 150 },
    ];
    setEvents(mockEvents);
  }, []);

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleSubmit = (eventData) => {
    if (selectedEvent) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === selectedEvent.id ? { ...event, ...eventData } : event
      ));
    } else {
      // Add new event
      const newEvent = {
        id: Math.max(...events.map(e => e.id), 0) + 1,
        ...eventData
      };
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
    setSelectedEvent(null);
  };

  const headers = ['Title', 'Date', 'Location', 'Capacity', 'Actions'];

  const renderRow = (event) => (
    <tr key={event.id}>
      <td>{event.title}</td>
      <td>{formatDate(event.date)}</td>
      <td>{event.location}</td>
      <td>{event.capacity}</td>
      <td>
        <Button variant="primary" size="small" onClick={() => handleEdit(event)}>
          Edit
        </Button>
        <Button variant="danger" size="small" onClick={() => handleDelete(event.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="event-list">
      <div className="event-list-header">
        <h2>Events</h2>
        <Button variant="primary" onClick={() => {
          setSelectedEvent(null);
          setShowModal(true);
        }}>
          Add Event
        </Button>
      </div>
      <Table headers={headers} data={events} renderRow={renderRow} />
      
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <EventForm 
          event={selectedEvent} 
          onSubmit={handleSubmit} 
          onCancel={() => setShowModal(false)} 
        />
      </Modal>
    </div>
  );
};

export default EventList;