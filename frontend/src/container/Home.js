import React, { useState } from 'react';
import '../Assets/css/Homepage.css';
import HeroSlider from '../components/HeroSlider';
import EventCard from '../components/EventCards';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample data for hero slider
  const heroEvents = [
    {
      id: 1,
      title: 'Summer Music Festival',
      description: 'Join us for three days of amazing live performances',
      image: 'https://via.placeholder.com/1200x500',
      date: 'June 15-17, 2025',
      location: 'Central Park'
    },
    {
      id: 2,
      title: 'Tech Conference 2025',
      description: 'Explore the latest innovations in technology',
      image: 'https://via.placeholder.com/1200x500',
      date: 'July 22-24, 2025',
      location: 'Convention Center'
    },
    {
      id: 3,
      title: 'Food & Wine Expo',
      description: 'Taste culinary delights from around the world',
      image: 'https://via.placeholder.com/1200x500',
      date: 'August 5-7, 2025',
      location: 'Downtown Plaza'
    }
  ];

  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 101,
      title: 'Art Exhibition',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'June 20, 2025',
      location: 'City Gallery'
    },
    {
      id: 102,
      title: 'Marathon 2025',
      image: 'https://via.placeholder.com/300x200',
      category: 'Sports',
      date: 'July 5, 2025',
      location: 'City Center'
    },
    {
      id: 103,
      title: 'Business Workshop',
      image: 'https://via.placeholder.com/300x200',
      category: 'Business',
      date: 'July 15, 2025',
      location: 'Business Hub'
    },
    {
      id: 104,
      title: 'Yoga Retreat',
      image: 'https://via.placeholder.com/300x200',
      category: 'Wellness',
      date: 'August 10, 2025',
      location: 'Sunset Beach'
    }
  ];

  // Sample data for current events
  const currentEvents = [
    {
      id: 201,
      title: 'Photography Exhibition',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'May 10-20, 2025',
      location: 'Modern Museum'
    },
    {
      id: 202,
      title: 'Craft Beer Festival',
      image: 'https://via.placeholder.com/300x200',
      category: 'Food & Drink',
      date: 'May 14-18, 2025',
      location: 'Riverfront Park'
    },
    {
      id: 203,
      title: 'Theater Festival',
      image: 'https://via.placeholder.com/300x200',
      category: 'Entertainment',
      date: 'May 12-25, 2025',
      location: 'Grand Theater'
    },
    {
      id: 204,
      title: 'Science Fair',
      image: 'https://via.placeholder.com/300x200',
      category: 'Education',
      date: 'May 15-20, 2025',
      location: 'Science Center'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Slider */}
      <section className="hero-section">
        <HeroSlider events={heroEvents} />
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">
              Discover and book tickets for the most anticipated events coming soon.
            </p>
          </div>

          <div className="event-cards">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="show-more-container">
            <Link to='/Upcoming-events'>
            <button className="show-more-btn">Show More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Running Events Section */}
      <section className="events-section current-events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Current Running Events</h2>
            <p className="section-description">
              Check out these events happening right now. Don't miss out!
            </p>
          </div>

          <div className="event-cards">
            {currentEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="show-more-container">
            <Link to='Current-events'>
            <button className="show-more-btn">Show More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;