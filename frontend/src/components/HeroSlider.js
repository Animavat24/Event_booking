import React, { useState, useEffect } from 'react';
import '../Assets/css/Homepage.css';

const HeroSlider = ({ events }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [events.length]);
  
  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + events.length) % events.length);
  };
  
  return (
    <div className="hero-slider">
      <div className="slides-container">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{event.title}</h1>
              <p className="slide-description">{event.description}</p>
              <div className="slide-details">
                <span className="slide-date"><i className="far fa-calendar-alt"></i> {event.date}</span>
                <span className="slide-location"><i className="fas fa-map-marker-alt"></i> {event.location}</span>
              </div>
              <button className="slide-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-arrow slider-arrow-next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      
      {/* Slide indicators/dots */}
      <div className="slider-indicators">
        {events.map((_, index) => (
          <button 
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;