import '../styles/Footer.css'
import { FaInstagram,  FaFacebook, FaYoutube, FaLinkedin  } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Masyoro Vocational School</h5>
            <p>Empowering students with language skills for global success since 1995. Join our community of learners and unlock your potential.</p>
            <div className="social-links">
              <a href="#"><i><FaInstagram/></i></a>
              <a href="#"><i><FaFacebook/></i></a>
              <a href="#"><i><FaYoutube /></i></a>
              <a href="#"><i><FaLinkedin/></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Szkoła</p>
            <p id="info_firm">&copy; 2025 Stworzone przez GLP</p>
            {/* Creator: Anastasiia Bzova 2025 */}
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer