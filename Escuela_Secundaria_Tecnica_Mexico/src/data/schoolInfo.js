// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Escuela Secundaria Tecnica Mexico",
    shortName: "ESTM",
    typeofSchool: "High School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.2432134072526!2d-88.5105765802429!3d18.303810868596987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5becf1aaaaaaab%3A0x90157dc63b8b4a44!2sEscuela%20Secundaria%20T%C3%A9cnica%20M%C3%A9xico!5e0!3m2!1suk!2spl!4v1767807285971!5m2!1suk!2spl",
    about: {
        welcomeText: "Welcome to Escuela Secundaria Tecnica Mexico! We invite you to explore our campus digitally, discover our specialized technical programs, and meet our expert instructors. Join us in our vision of driving innovation and development through education. Stay updated with our latest projects and services—we are here to help you succeed!",
        historyText: "The core mission of Escuela Secundaria Tecnica Mexico (ESTM) is to deliver a comprehensive educational experience that balances academic rigor with specialized technical skills. We are dedicated to fostering a supportive learning environment where every student is challenged to excel. Our primary goal is to equip students with the practical knowledge and vocational talents essential for the 21st-century workforce. Beyond the classroom, we actively cultivate innate abilities in fields such as Agriculture and Technical Sciences, ensuring our graduates are ready for both higher education and the professional world. Character development is central to our philosophy; we strive to instill discipline, integrity, and a spirit of service. By promoting social responsibility and technical proficiency, ESTM prepares students to become productive citizens and ethical leaders who contribute meaningfully to the growth of Belize.",
        footerText: "Vision Statement: To guide and inspire students through technical excellence and holistic education, empowering them to make a significant impact on our nation and the global community."
    },
    contacts: {
        country: "Belize",
        address: "San Roman Village, Corozal District Belize, Central America",
        phoneMain: "(+501) 423-3140",
        phoneAdditional: "(+501) 621-1051",
        email: "estm83@estm.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 7:00 AM - 4:30 PM",
            // saturday: "Saturday: 12:00 AM - 4:00 AM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/p/Escuela-Secundaria-T%C3%A9cnica-M%C3%A9xico-ESTM-100057288016719/",
        instagram: "",
        linkedin: "",
        youtube: "",
    },

    heroSlider: [
        {
            title: "PIONEERING TECHNICAL EXCELLENCE",
            subtitle: "At ESTM, we empower students through a rigorous academic foundation combined with practical technical training.",
            buttonText: "Our Mission",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "CULTIVATING CREATIVITY & HERITAGE",
            subtitle: "We celebrate diversity by encouraging students to express their unique identity through vibrant arts and cultural programs.",
            buttonText: "View Campus Life",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "INNOVATING FOR THE FUTURE",
            subtitle: "Developing hands-on expertise in Agriculture, Information Technology, and Technical Drawing to build tomorrow's leaders.",
            buttonText: "Contact Us Today",
            buttonLink: "#contact",
            image: slide3
        }
    ],

    teachers: {
        // 'Barrette_Belisle': {
        //     subject: "",
        //     bio: "Principal",
        //     email: "ologh@ologh.edu.bz"
        // },
    },
    galleryCaptions: {
      0: 'Example text',
    },

    stats: [
        { number: 720, label: 'Active Students' },
        { number: 45, label: 'Expert Teachers' },
        { number: 12, label: 'Support Staff' }
    ]
};