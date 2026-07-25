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
            <a href="#" className="social-icon"><Globe size={20} /></a>
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
          <p>&copy; {new Date().getFullYear()} Sparsh Neonatal & Pediatric Centre | All Rights Reserved. Designed by Kanan Patel.</p>
        </div>
      </div>
    </footer>
  );
}
