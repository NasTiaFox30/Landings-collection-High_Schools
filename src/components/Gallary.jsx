import { useState } from 'react'
import '../styles/Gallary.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop',
      caption: 'Modern Classroom'
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
      caption: 'School Library'
    },
    {
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      caption: 'Computer Lab'
    },
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
      caption: 'Study Area'
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      caption: 'Group Discussion Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
      caption: 'Student Cafeteria'
    }
  ]

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <h2 className="section-title">School Gallery</h2>
        <p className="section-subtitle">Take a look at our modern facilities and vibrant learning environment</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.caption} />
              <div className="gallery-overlay">
                <i className="fas fa-expand"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img className='opened_photo' src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery