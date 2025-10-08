import { useState, useEffect } from 'react'
import '../styles/HeroSlider.css'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop',  //example
      title: 'Masyoro Vocational School',
      subtitle: 'Excellence in Language Education Since 1995',
      buttonText: 'Learn More',
      buttonLink: '#about'
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&h=900&fit=crop',  //example
      title: 'Shape Your Future',
      subtitle: 'Professional Language Training for Global Success',
      buttonText: 'Get Started',
      buttonLink: '#contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&h=900&fit=crop',  //example
      title: 'Expert Instructors',
      subtitle: 'Learn from Industry Professionals and Native Speakers',
      buttonText: 'Meet Our Team',
      buttonLink: '#about'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection(slide.buttonLink.replace('#', ''))}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider