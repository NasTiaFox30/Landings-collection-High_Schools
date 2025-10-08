import '../../styles/Information.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaBusinessTime  } from "react-icons/fa";

const Information = () => {
  return (        
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
  )
}

export default Information