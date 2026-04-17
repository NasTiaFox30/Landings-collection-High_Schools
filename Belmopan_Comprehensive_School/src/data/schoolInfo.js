// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Belmopan Comprehensive School",
    shortName: "BCS",
    typeofSchool: "School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "https://www.youtube.com/embed/lNjUAPrIBlI?si=Tw7oG2doivrRpxRF",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.4533617758702!2d-88.76907949999999!3d17.245287899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd57532e4d525%3A0x2eb97a22756ffd58!2sBelmopan%20Comprehensive%20School!5e0!3m2!1suk!2spl!4v1764514238443!5m2!1suk!2spl",
    
    about: {
        welcomeText: "where we are dedicated to providing a holistic education that encompasses academic excellence, vocational skills, and strong community engagement.",
        historyText: "Belmopan Comprehensive School (BCS) has a long-standing history as a pillar of secondary education in Belize's capital city. Founded in 1973 as a direct response to the growing need for diverse and quality education, BCS was established with a unique vision to integrate both academic and vocational training. Over the decades, the school has consistently expanded its curriculum, becoming known for its 'comprehensive' approach - ensuring students are prepared for both higher education and the workforce. The school quickly grew from its initial modest enrollment to become one of the largest and most influential high schools in the Cayo District. A key milestone was the expansion of its technical wing in the [Insert Decade, e.g., 1990s], solidifying its commitment to vocational areas like Business, Home Economics, and Industrial Arts. This commitment ensures that BCS graduates are versatile, skilled, and ready to meet the challenges of the modern economy, maintaining its reputation as a leading institution in Belmopan.", 
        footerText: "Belmopan Comprehensive School is one of the top secondary schools in Belmopan. Offering quality education and preparation for students."

    },
    contacts: {
        country: "Belize",
        address: "George Price Blvd, Belmopan, Belize",
        phoneMain: "(+501) 822-2253",
        phoneAdditional: "(+501) 613-1976",
        email: "svaughan@bcs.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 7:00 AM - 4:00 PM",
            saturday: "Saturday: 9:00 AM - 1:00 PM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/BelmopanComprehensiveSchool/",
        instagram: "https://www.instagram.com/explore/locations/279300008/belmopan-comprehensive-school/",
        // linkedin: "",
        // youtube: "",
    },

    heroSlider: [
        {
            title: "COMPREHENSIVE EDUCATION. COLLECTIVE SUCCESS.",
            subtitle: "Equipping students with the holistic knowledge required for leadership and innovation in Belmopan City.",
            buttonText: "Our Programs",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "UNLOCK YOUR COMPREHENSIVE POTENTIAL",
            subtitle: "Blending academic rigor, vocational training, and extracurricular life for well-rounded growth.",
            buttonText: "Student Life & Activities",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "THE HEART OF THE BELMOPAN COMMUNITY",
            subtitle: "Join a learning environment that shapes responsible citizens and future leaders.",
            buttonText: "Apply Now",
            buttonLink: "#contact",
            image: slide3
        }
    ],

    teachers: {
        'Bay_Rivas': {
            subject: "",
            bio: "Principal"
        },
    },
    galleryCaptions: {
      0: 'Example text',
    },

    stats: [
        { number: 1150, label: 'Active Students' },
        { number: 11, label: 'Expert Teachers' },
        { number: 2, label: 'Support Staff' }
    ] ,
};