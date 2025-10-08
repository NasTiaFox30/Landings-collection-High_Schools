import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Students learning" />  {/*example*/} 
          </div>
          <div className="about-text">
            <h2>About Masyoro Vocational School</h2>
            <p>For over 25 years, Masyoro Vocational School has been at the forefront of language education, providing comprehensive training programs that prepare students for global opportunities.</p>
            <p>Our institution offers specialized courses in English, Spanish, French, German, and Mandarin, taught by experienced native speakers and certified instructors. We combine traditional teaching methods with modern technology to create an immersive learning environment.</p>
            <p>With state-of-the-art facilities, small class sizes, and personalized attention, we ensure that every student receives the support they need to achieve fluency and confidence in their chosen language.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About