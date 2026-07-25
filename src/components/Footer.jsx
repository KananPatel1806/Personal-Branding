import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo" style={{marginBottom: '1.5rem', display: 'inline-block'}}>
            <img src="/Sparsh%20Logo.png" alt="Sparsh Clinic Logo" style={{height: '100px'}} />
          </div>
          <p className="footer-description">
            A state-of-the-art pediatric and neonatal care facility dedicated to providing compassionate, comprehensive, and advanced medical treatment for children of all ages.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About Dr. Sunil Patel</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">Meet The Doctor</a></li>
            <li><a href="/#book-appointment">Book Appointment</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#">24×7 Emergency</a></li>
            <li><a href="#">NICU & PICU Facilities</a></li>
            <li><a href="#">Pediatric Surgery</a></li>
            <li><a href="#">High Risk Newborn Follow-up</a></li>
            <li><a href="#">Pediatric Specialist OPD</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={24} className="contact-icon" style={{ minWidth: '24px' }} />
              <span>SF Unit-1, TF Unit-1 & 2, Pushpak Arcade, Opposite Hirawadi BRTS, Ahmedabad – 382345</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>97248 11611</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>contact@sparshclinic.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dr. Sunil Patel - Pediatric Intensivist. | Thoughtfully Crafted by Kanan Patel.</p>
        </div>
      </div>
    </footer>
  );
}
