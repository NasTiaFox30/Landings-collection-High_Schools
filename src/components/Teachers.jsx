import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import '../styles/Teachers.css'

// Info
import { schoolInfo } from '../data/schoolInfo'

const Teachers = () => {
  const [isMobile, setIsMobile] = useState(false)

  const images = import.meta.glob('../assets/images/teachers/*.{jpg,jpeg,png}', { eager: true });

  const getTeacherDetails = (fileName) => {
    const details = schoolInfo.teachers;

    const key = fileName.replace(/\.[^/.]+$/, "");
    return details[key] || { subject: "", bio: "Teacher" }
  };

  const teachers = Object.entries(images).map(([path, module]) => {
    // get file name ("Alvin_Young.jpg")
    const fileName = path.split('/').pop();
    
    // remove '/' and replace with 'space'
    const rawName = fileName.replace(/\.[^/.]+$/, "");
    const formattedName = rawName.replace(/_/g, ' ');

    const details = getTeacherDetails(fileName);

    return {
      image: module.default,
      name: formattedName,
      subject: details.subject,
      bio: details.bio
    };
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    spaceBetween: 50,
    slidesPerView: isMobile ? 1 : 3,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: isMobile ? false : true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }

  return (
    <section id="teachers" className="teachers section">
      <div className="container">
        <h2 className="section-title">Meet Our Teachers</h2>
        <p className="section-subtitle">
          Our dedicated faculty members are experienced educators committed to
          student success and lifelong learning.
        </p>
        
        <div className="teachers-slider-container">
          <Swiper {...swiperParams} className="teachers-slider">
            {teachers.map((teacher, index) => (
              <SwiperSlide key={index}>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <img src={teacher.image} alt={teacher.name} />
                    <div className="teacher-overlay">
                      <div className="teacher-bio">
                        <p>{teacher.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-info">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-subject">{teacher.subject}</p>
                    <div className="teacher-social">
                      <a href="#" aria-label="LinkedIn profile">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" aria-label="Send email">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href="#" aria-label="View profile">
                        <i className="fas fa-user"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Teachers