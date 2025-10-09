import { useState } from 'react'
import '../styles/Gallary.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      src: '/images/example1.jpg',
      caption: ''
    },
    {
      src: '/images/example2.jpg',
      caption: ''
    },
    {
      src: '/images/example3.jpg',
      caption: ''
    },
    {
      src: '/images/example4.jpg',
      caption: ''
    },
    {
      src: '/images/example5.jpg',
      caption: ''
    },
    {
      src: '/images/example6.jpg',
      caption: 'Shildren day 2023'
    },
    {
      src: '/images/example7.jpg',
      caption: ''
    },
    {
      src: '/images/example8.jpg',
      caption: ''
    },
    {
      src: '/images/example9.jpg',
      caption: ''
    },
    {
      src: '/images/example10.jpg',
      caption: ''
    },
  ]

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <h2 className="section-title">College Gallery</h2>
        <p className="section-subtitle">Take a look at our events and vibrant learning environment</p>
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
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery