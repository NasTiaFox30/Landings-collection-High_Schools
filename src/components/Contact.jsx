import { useState } from 'react'
import '../styles/Contact.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaBusinessTime  } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    question: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your sent message! That`s only demo form. Coming soon...')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        question: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your language learning journey? Contact us today!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <div className="contact-item">
              <i><FaMapMarkerAlt /></i>
              <div>
                <strong>Address:</strong><br />
                123 Education Street<br />
                Learning District, City 12345
              </div>
            </div>
            <div className="contact-item">
              <i><FaPhoneAlt /></i>
              <div>
                <strong>Phone:</strong><br />
                Main: +1 (555) 123-4567<br />
                Admissions: +1 (555) 123-4568
              </div>
            </div>
            <div className="contact-item">
              <i><FaMailBulk /></i>
              <div>
                <strong>Email:</strong><br />
                info@masyoroschool.com<br />
                admissions@masyoroschool.com
              </div>
            </div>
            <div className="contact-item">
              <i><FaBusinessTime /></i>
              <div>
                <strong>Office Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 3:00 PM
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h4>Send us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number" 
                />
              </div>
              <div className="form-group">
                <select 
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select kind of question:</option>
                  <option value="recruiting">Recruiting</option>
                  <option value="documents">Documents</option>
                  <option value="events">Shool events</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Your Message" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact