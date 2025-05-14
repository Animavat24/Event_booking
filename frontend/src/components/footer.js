import React from 'react';
import '../Assets/css/Header.css';
// import logo from './logo.png'; // Import your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
          <p className="footer-description">
            Your project description here. Add a brief summary about your company
            or project to give visitors context.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Event List</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <address className="footer-address">
            <p><i className="fas fa-map-marker-alt"></i> 123 Street Name, City, Country</p>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> info@yourproject.com</p>
          </address>
        </div>

        <div className="footer-section footer-newsletter">
          <h3 className="footer-title">Newsletter</h3>
          <p>Subscribe to our newsletter for updates</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Your Project Name. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;