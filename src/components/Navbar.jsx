import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/Sparsh%20Logo.png" alt="Sparsh Clinic Logo" style={{height: '90px'}} />
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/#home" className="nav-links" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-links" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/#services" className="nav-links" onClick={toggleMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="/#telemedicine" className="nav-links" onClick={toggleMenu}>Telemedicine</a>
          </li>
          <li className="nav-item">
            <a href="/#gallery" className="nav-links" onClick={toggleMenu}>Gallery</a>
          </li>
          <li className="nav-item">
            <a href="/#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
          </li>
          <li className="nav-item nav-btn-item">
            <a href="/#book-appointment" className="btn btn-primary" onClick={toggleMenu}>
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
