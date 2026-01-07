// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Cornerstone Presbyterian High School",
    shortName: "CPHS",
    typeofSchool: "High School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77257.68884013493!2d-88.50796992471486!3d18.354221589857328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5beca42a910f2d%3A0x8dc1b500d1175fb1!2sCornerstone%20Presbyterian%20High%20School!5e1!3m2!1suk!2spl!4v1764617232417!5m2!1suk!2spl",
    about: {
        welcomeText: "where we invite you to browse our site, learn of our different schools, and meet our dedicated teachers! We encourage you to become part of our vision in expanding and developing our institutions. Explore our news, technology, projects, and services, and feel free to contact us for any information. Thank you for stopping by!",
        historyText: "The core mission of Cornerstone Presbyterian High School (Belize) is to deliver an educational experience deeply rooted in Presbyterian Christian values while ensuring academic excellence and holistic development. We are committed to nurturing a vibrant and loving community where every student feels celebrated and empowered. Our primary academic goal is to provide students with the essential knowledge and talents required for success in the 21st century. This goes beyond mere intellectual instruction; it involves actively cultivating a student's innate abilities through a rigorous and supportive curriculum. We believe that by celebrating diversity in talent, we prepare students to occupy meaningful and productive roles in Belizean society and beyond. Character and Conduct Development Crucially, our mission emphasizes character formation. We strive to lead each young person in the comprehensive development of positive skills, attitudes, character, and conduct. This formation is guided by the principle of service: teaching students to live lives that 'please God and serve their fellowman.' This focus ensures that our graduates are not only academically capable but are also ethical leaders and responsible citizens prepared to contribute fruitfully to their communities. In essence, Cornerstone Presbyterian High School endeavors to shape students who are academically prepared, spiritually grounded, and socially responsible, enabling them to make a positive and lasting impact in all aspects of life.",
        footerText: "Vision Statement: Our goal is to guide, prepare, and motivate students through Christ-centered education to positively impact our communities and the world we serve."
    },
    contacts: {
        country: "Belize",
        address: "Box 232, Mile 74 1/2 Philip Goldson Highway ",
        phoneMain: "(+501) 671 2615",
        phoneAdditional: "(+501) 670 9374",
        email: "therockjesus@gmail.com" ,
        businessHours: {
            weekdays: "Mon-Fri: 8:00 AM - 3:30 AM",
            // saturday: "Saturday: 12:00 AM - 4:00 AM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/p/Cornerstone-Presbyterian-High-School-100064130531176/",
        instagram: "",
        linkedin: "",
        youtube: "https://www.youtube.com/channel/UChkVhmO3expjb-5m7s-zYxQ",
    },

    heroSlider: [
        {
            title: "MISSION: KNOWLEDGE AND TALENT",
            subtitle: "Nurturing skills, attitudes, character, and conduct to enable students to function fruitfully in society.",
            buttonText: "Our Mission",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "EXPLORE COLLEGE LIFE",
            subtitle: "See our Christ-centered education in action: from projects to services, teams, and fun-filled activities in every class.",
            buttonText: "View Campus Life",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "BE PART OF OUR COMMUNITY",
            subtitle: "We invite you to learn about our schools, meet our teachers, and join our fun-filled, expanding vision.",
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
        { number: 600, label: 'Active Students' },
        { number: 28, label: 'Expert Teachers' },
        { number: 5, label: 'Support Staff' }
    ] ,
};