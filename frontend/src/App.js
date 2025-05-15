import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './container/Home';
import UpcomingEvents from './container/UpcomingEvents';
import CurrentEvents from './container/CurrentEvent';
import SubCategoryEvents from './container/Subcategory';
import EventDetailsPage from './container/EventDetail';
import BookingFormPage from './container/BookingPage';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Upcoming-events" element={<UpcomingEvents />} />
          <Route path="/Current-events" element={<CurrentEvents />} />
        <Route path="/booking/:eventId" element={<BookingFormPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
           <Route path="/events/category/:category" element={<SubCategoryEvents />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
