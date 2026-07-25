import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import './BookAppointment.css';

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    phone: '',
    email: '',
    symptoms: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send data to the backend API
    console.log("Appointment Data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container section">
        <div className="success-card card text-center animate-fade-in">
          <div className="success-icon">
            <CheckCircle size={64} />
          </div>
          <h2>Appointment Confirmed!</h2>
          <p className="text-muted">Thank you, {formData.patientName}. Your appointment has been successfully scheduled.</p>
          <div className="appointment-details-summary">
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Doctor:</strong> {formData.doctor || 'Assigned automatically'}</p>
          </div>
          <p className="text-muted mt-4">We have sent a confirmation email and WhatsApp message to the details provided.</p>
          <button className="btn btn-primary mt-4" onClick={() => window.location.href='/'}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page section" id="book-appointment">
      <div className="container">
        <div className="section-header text-center">
          <h2>Book Your Appointment</h2>
          <p className="text-muted">Fill out the form below to schedule your consultation</p>
        </div>

        <div className="booking-container">
          {/* Progress Bar */}
          <div className="booking-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-circle">1</div>
              <span>Select Service</span>
            </div>
            <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-circle">2</div>
              <span>Patient Details</span>
            </div>
            <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <span>Confirm</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="card booking-card animate-fade-in">
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Service & Time */}
              {step === 1 && (
                <div className="form-step">
                  <h3>Select Service & Time</h3>
                  <div className="form-group">
                    <label>Department / Service</label>
                    <select name="department" value={formData.department} onChange={handleInputChange} required className="form-control">
                      <option value="">Select a department...</option>
                      <option value="general">General Checkup</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Preferred Doctor (Optional)</label>
                    <select name="doctor" value={formData.doctor} onChange={handleInputChange} className="form-control">
                      <option value="">Any Available Doctor</option>
                      <option value="dr-sunil">Dr. Sunil Patel</option>
                      <option value="dr-sarah">Dr. Sarah Johnson</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label><Calendar size={16} /> Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group half">
                      <label><Clock size={16} /> Time</label>
                      <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="form-control" />
                    </div>
                  </div>

                  <div className="form-actions right">
                    <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!formData.department || !formData.date || !formData.time}>
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Patient Details */}
              {step === 2 && (
                <div className="form-step animate-fade-in">
                  <h3>Patient Information</h3>
                  <div className="form-group">
                    <label><User size={16} /> Full Name</label>
                    <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} required className="form-control" placeholder="John Doe" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half">
                      <label><Phone size={16} /> Phone Number (WhatsApp)</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-control" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group half">
                      <label><Mail size={16} /> Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-control" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label><FileText size={16} /> Symptoms / Reason for Visit</label>
                    <textarea name="symptoms" value={formData.symptoms} onChange={handleInputChange} rows="4" className="form-control" placeholder="Briefly describe your symptoms..."></textarea>
                  </div>

                  <div className="form-actions space-between">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>
                      Back
                    </button>
                    <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!formData.patientName || !formData.phone || !formData.email}>
                      Review Details
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="form-step animate-fade-in">
                  <h3>Review & Confirm</h3>
                  <div className="review-box">
                    <div className="review-item">
                      <span className="review-label">Service:</span>
                      <span className="review-value" style={{textTransform: 'capitalize'}}>{formData.department}</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Date & Time:</span>
                      <span className="review-value">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Patient Name:</span>
                      <span className="review-value">{formData.patientName}</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Contact:</span>
                      <span className="review-value">{formData.phone} | {formData.email}</span>
                    </div>
                  </div>
                  
                  <div className="telemedicine-option">
                    <label className="checkbox-container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      I want to make this a Telemedicine (Online) Consultation
                    </label>
                  </div>

                  <div className="form-actions space-between">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>
                      Edit Details
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
