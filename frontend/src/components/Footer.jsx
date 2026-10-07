import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>A-67, 100 ft Road, Hardevpuri, Shahadra, New Delhi-110093</p>
          <p>📧 query@ezyschooling.com</p>
          <p>📞 +91-8766340464</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/search">Search Schools</a>
          <a href="/compare">Compare Schools</a>
          <a href="/parenting">Parenting</a>
          <a href="/news">News</a>
        </div>
        
        <div className="footer-section">
          <h3>For Schools</h3>
          <a href="/claim">Claim your School</a>
          <a href="/add">Add your School</a>
          <a href="/manage">Manage Applications</a>
        </div>
        
        <div className="footer-section">
          <h3>About</h3>
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/contact">Contact Us</a>
          <a href="/careers">Careers</a>
          <a href="/faq">FAQs</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Ezyschooling. All rights reserved.</p>
        <p>Your trusted partner in finding the perfect school for your child's bright future.</p>
      </div>
    </footer>
  );
};

export default Footer;
