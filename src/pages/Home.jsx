import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Phone, Shield, Star, Clock, Heart, 
  Stethoscope, Award, Activity, Users, Baby, Thermometer,
  Apple, Brain, Pill, Video, CheckCircle, ChevronDown, MessageSquare
} from 'lucide-react';
import BookAppointment from './BookAppointment';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-modern" id="home">
      {/* 1. Hero Section */}
      <section className="hero-modern">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container hero-container animate-fade-in">
            <div className="hero-text-content">
              <span className="badge-premium">DR. SUNIL PATEL • PEDIATRIC INTENSIVIST</span>
              <h1>Expert Care For Your Little Ones.</h1>
              <p className="hero-subtitle">
                With over 15 years of specialized experience in neonatal and pediatric intensive care, I provide world-class, compassionate medical treatment for your child when they need it most.
              </p>
              <div style={{marginBottom: '2.5rem'}}>
                <p className="hero-quote">
                  "Your child's health is my life's mission. I am here for you 24/7."
                </p>
              </div>
            <div className="hero-actions">
              <a href="/#book-appointment" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </a>
              <button className="btn btn-outline btn-lg">
                <Video size={20} />
                Watch Introduction
              </button>
            </div>
          </div>
          <div className="hero-animated-visuals">
            <div className="floating-card card-1 glass">
              <div className="icon-wrapper"><Heart size={24} style={{color: 'var(--color-secondary)'}} /></div>
              <div className="text-wrapper">
                <h4>15+ Years</h4>
                <span>Trusted Experience</span>
              </div>
            </div>
            
            <div className="floating-card card-2 glass">
              <div className="icon-wrapper"><Activity size={24} style={{color: 'var(--color-primary)'}} /></div>
              <div className="text-wrapper">
                <h4>NICU & PICU</h4>
                <span>Advanced Care</span>
              </div>
            </div>

            <div className="floating-card card-3 glass">
              <div className="icon-wrapper"><Star size={24} style={{color: '#F59E0B'}} /></div>
              <div className="text-wrapper">
                <h4>10,000+</h4>
                <span>Happy Smiles</span>
              </div>
            </div>
            
            <div className="abstract-glow"></div>
          </div>
        </div>
      </section>

      {/* 2. Quick Appointment Bar */}
      <section className="quick-appointment reveal glass-dark">
        <div className="container quick-appt-container">
          <div className="qa-text">
            <h3>Need a Consultation Today?</h3>
            <p>Walk-ins and Telemedicine available 24/7.</p>
          </div>
          <div className="qa-action">
            <a href="tel:9724811611" className="btn btn-secondary btn-lg">
              <Phone size={20} /> Call 97248 11611
            </a>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="why-choose section" id="about">
        <div className="container reveal">
          <div className="section-header text-center">
            <h2>Why Trust Me With Your Child's Health?</h2>
            <p className="text-muted">A personal commitment to delivering the highest standard of pediatric care.</p>
          </div>
          
          <div className="features-grid">
            <div className="card feature-card">
              <div className="icon-box icon-blue"><Award size={28} /></div>
              <h3>Experienced Pediatrician</h3>
              <p className="text-muted">15 Years of expertise in complex neonatal and pediatric care.</p>
            </div>
            <div className="card feature-card">
              <div className="icon-box icon-green"><Baby size={28} /></div>
              <h3>Child Friendly Care</h3>
              <p className="text-muted">A warm, compassionate environment that makes children feel at home.</p>
            </div>
            <div className="card feature-card">
              <div className="icon-box icon-yellow"><Activity size={28} /></div>
              <h3>Modern Hospital</h3>
              <p className="text-muted">Equipped with state-of-the-art NICU, PICU, and advanced diagnostic tools.</p>
            </div>
            <div className="card feature-card">
              <div className="icon-box icon-blue"><Heart size={28} /></div>
              <h3>Personal Attention</h3>
              <p className="text-muted">I take the time to listen, understand, and tailor treatments for your child.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet The Doctor */}
      <section className="meet-doctor section bg-light">
        <div className="container meet-doctor-container reveal">
          <div className="doctor-large-photo">
            <div className="photo-placeholder" style={{padding: 0, overflow: 'hidden', border: 'none'}}>
              <img src="/Dr.%20Sunil%20Patel.jpg" alt="Dr. Sunil Patel" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          </div>
          <div className="doctor-details">
            <span className="badge-premium">MEET YOUR DOCTOR</span>
            <h2>Hi, I'm Dr. Sunil Patel</h2>
            <h4 className="designation text-primary" style={{marginBottom: '1.5rem', fontWeight: 600}}>Neonatal and Pediatric Intensivist</h4>
            
            <p className="doctor-message">
              As a dedicated pediatric specialist, I have spent the last 15 years helping children overcome complex medical challenges. My approach combines advanced medical science with genuine, heartfelt compassion for both the child and the parents.
            </p>

            <div className="doctor-creds mt-4">
              <div className="cred-item">
                <CheckCircle size={20} className="cred-icon" />
                <span><strong>Experience:</strong> 15 Years</span>
              </div>
              <div className="cred-item">
                <CheckCircle size={20} className="cred-icon" />
                <span><strong>Languages:</strong> English, Hindi, Gujarati</span>
              </div>
              <div className="cred-item">
                <CheckCircle size={20} className="cred-icon" />
                <span><strong>Qualifications:</strong> MBBS, DCH, Fellow in neonatal medicine, Diploma in medico-legal system</span>
              </div>
              <div className="cred-item">
                <CheckCircle size={20} className="cred-icon" />
                <span><strong>Special Areas:</strong> Respiratory medicine, Medico-legal cases</span>
              </div>
              <div className="cred-item">
                <CheckCircle size={20} className="cred-icon" />
                <span><strong>Positions & Memberships:</strong> Trainer - advance neonatal resuscitation program</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hospital Introduction */}
      <section className="hospital-intro section" id="hospital">
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge-premium">SPARSH NEONATAL & PEDIATRIC CENTRE</span>
            <h2>Sparsh Neonatal & Pediatric Centre</h2>
            <p className="text-muted" style={{maxWidth: '800px', margin: '0 auto'}}>
              A state-of-the-art pediatric and neonatal care facility dedicated to providing compassionate, comprehensive, and advanced medical treatment for children of all ages.
            </p>
          </div>

          <div className="hospital-gallery">
            <div className="h-card"><div className="h-img-ph">NICU</div><h3>Advanced NICU</h3></div>
            <div className="h-card"><div className="h-img-ph">PICU</div><h3>PICU</h3></div>
            <div className="h-card"><div className="h-img-ph">Emergency</div><h3>24x7 Emergency</h3></div>
            <div className="h-card"><div className="h-img-ph">OT</div><h3>Operation Theatre</h3></div>
          </div>
        </div>
      </section>

      {/* 6. Services Overview */}
      <section className="services-section section bg-light" id="services">
        <div className="container reveal">
          <div className="section-header text-center">
            <h2>How I Can Help Your Child</h2>
            <p className="text-muted">Comprehensive pediatric solutions under one roof.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card"><Pill className="s-icon"/><h4>24×7 Emergency</h4></div>
            <div className="service-card"><Baby className="s-icon"/><h4>NICU & PICU</h4></div>
            <div className="service-card"><Activity className="s-icon"/><h4>Operation Theatre</h4></div>
            <div className="service-card"><Stethoscope className="s-icon"/><h4>Medical Store</h4></div>
            <div className="service-card"><Phone className="s-icon"/><h4>Ambulance</h4></div>
            <div className="service-card"><Brain className="s-icon"/><h4>Specialist OPD</h4></div>
            <div className="service-card"><Heart className="s-icon"/><h4>High Risk Follow-up</h4></div>
            <div className="service-card"><Clock className="s-icon"/><h4>Blood Test & Radiology</h4></div>
          </div>
        </div>
      </section>

      {/* 7. Telemedicine */}
      <section className="telemedicine section">
        <div className="container tm-container reveal">
          <div className="tm-content">
            <span className="badge-premium">ONLINE CONSULTATION</span>
            <h2>Telemedicine Available</h2>
            <p>Consult with Dr. Sunil Patel from the comfort of your home. Secure video consultations, digital prescriptions, and easy follow-ups.</p>
            <ul className="tm-list">
              <li><Video size={18}/> Video Consultation</li>
              <li><Calendar size={18}/> Book Online</li>
              <li><Stethoscope size={18}/> Digital Prescription</li>
              <li><Clock size={18}/> Easy Follow-up</li>
            </ul>
            <a href="/#book-appointment" className="btn btn-primary mt-4">Book Video Consult</a>
          </div>
          <div className="tm-illustration">
            <div className="tm-mockup glass">
              <Video size={64} color="var(--color-primary)"/>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Stats / Counter */}
      <section className="stats-section">
        <div className="container stats-container reveal">
          <div className="stat-box"><h2>15</h2><p>Years Experience</p></div>
          <div className="stat-box"><h2>50k+</h2><p>Happy Patients</p></div>
          <div className="stat-box"><h2>24/7</h2><p>Emergency Care</p></div>
          <div className="stat-box"><h2>100%</h2><p>Commitment</p></div>
        </div>
      </section>

      {/* 9. Parent Testimonials */}
      <section className="testimonials section bg-light">
        <div className="container reveal">
          <div className="section-header text-center">
            <h2>Stories From Happy Families</h2>
            <div className="stars" style={{color: 'var(--color-accent)', margin: '1rem 0'}}>
              <Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/>
            </div>
            <p className="text-muted">Real stories from real parents.</p>
          </div>
          
          <div className="testi-grid">
            <div className="card testi-card">
              <p className="quote">"Dr. Sunil is incredibly patient and thorough. The hospital facilities are top-notch and very clean. Highly recommended for any parent!"</p>
              <div className="author">
                <div className="author-img"></div>
                <div><h4>Priya M.</h4><span>Mother of 2-year old</span></div>
              </div>
            </div>
            <div className="card testi-card">
              <p className="quote">"We rushed to the emergency at 2 AM and the staff was extremely prompt. Dr. Patel's calm demeanor gave us so much reassurance."</p>
              <div className="author">
                <div className="author-img"></div>
                <div><h4>Rahul S.</h4><span>Father</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Book Appointment CTA */}
      <section className="final-cta section" id="contact">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Need a Consultation?</h2>
              <p>Book your appointment today and give your child the best care possible.</p>
              <div className="cta-buttons">
                <a href="/#book-appointment" className="btn btn-primary btn-lg">Book Appointment Today</a>
                <a href="https://wa.me/919724811611" className="btn btn-secondary btn-lg" style={{backgroundColor: '#25D366'}}>
                  <MessageSquare size={20} /> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 14. Book Appointment Form */}
      <div className="reveal">
        <BookAppointment />
      </div>
    </div>
  );
}
