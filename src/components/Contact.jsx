import '../styles/Contact.css'
import Information from './Contact/Information'
import ContactForm from './Contact/ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your language learning journey? Contact us today!</p>
        <div className="contact-content">
          <Information />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact