import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './container/Home';
import UpcomingEvents from './container/UpcomingEvents';
import CurrentEvents from './container/CurrentEvent';
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
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
