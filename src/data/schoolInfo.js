// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Corozal Community College",
    shortName: "CCC",
    typeofSchool: "College",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.5378368210781!2d-88.40649507689226!3d18.395065334643945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5b95de88752045%3A0x639987f15143e19b!2sCorozal%20Community%20College!5e0!3m2!1suk!2spl!4v1767799559825!5m2!1suk!2spl",
    about: {
        welcomeText: "Welcome to Corozal Community College! We invite you to browse our site, learn about our diverse academic programs, and meet our dedicated faculty. We encourage you to become part of our vision in expanding educational excellence in Belize. Explore our latest news, technology initiatives, and student projects. Thank you for visiting us!",
        historyText: "Established in 1978, Corozal Community College (CCC) is committed to providing a transformative educational experience that fosters intellectual growth and holistic development. Our mission is to nurture a vibrant learning environment where every student is empowered to achieve their full potential. We provide students with the essential knowledge and technical skills required for success in the 21st century through a rigorous and supportive curriculum. Guided by our motto, 'In Pursuit of Excellence,' we emphasize character formation and ethical leadership. We strive to develop positive attitudes and social responsibility in our students, preparing them to occupy meaningful roles and contribute fruitfully to the development of Belizean society and the global community.",
        footerText: "Vision Statement: Our goal is to guide, prepare, and motivate students through quality education and innovative learning to positively impact our communities and the world we serve."
    },
    contacts: {
        country: "Belize",
        address: "PO Box 63, San Andres, Corozal, Belize",
        phoneMain: "(+501) 422-3280",
        phoneAdditional: "(+501) 422-2541",
        email: "principal@ccc.edu.bz" ,
        businessHours: {
            weekdays: "Mon-Fri: 7:50 AM - 4:00 PM",
            saturday: "Saturday: Closed",
            sunday: "Sunday: 7:50 AM - 4:00 PM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/ccc.edu.bz/",
        instagram: "",
        linkedin: "",
        youtube: "",
    },

    heroSlider: [
        {
            title: "IN PURSUIT OF EXCELLENCE",
            subtitle: "Providing high-quality education since 1978, fostering intellectual growth and leadership in the heart of Corozal.",
            buttonText: "Our Mission",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "EMPOWERING FUTURE LEADERS",
            subtitle: "Explore a vibrant campus life filled with innovative technology projects, competitive sports, and academic success.",
            buttonText: "Discover CCC Life",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "JOIN THE CCC FAMILY",
            subtitle: "Join a community dedicated to developing the skills and character needed to thrive in Belize and beyond.",
            buttonText: "Apply Now",
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