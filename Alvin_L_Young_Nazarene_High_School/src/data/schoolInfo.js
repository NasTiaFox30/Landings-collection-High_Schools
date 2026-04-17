// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";
// import mainVideo from "";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Alvin L. Young Nazarene High School",
    shortName: "ALYNHS",
    typeofSchool: "Hight School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1906.9467224716445!2d-89.123398!3d17.077864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5e42dd3a8f82e1%3A0x7eb790d59bf3848e!2sAlvin%20L%20Young%20Nazarene%20High%20School!5e0!3m2!1spl!2sus!4v1764334634056!5m2!1spl!2sus",
    
    about: {
        welcomeText: "where we are committed to fostering academic excellence and character development in a nurturing environment.",
        historyText: "Alvin L Young Nazarene High School  was founded by District Superintendent Rev. John Tzib and Mrs. Anita Tzib and commenced operation on September 15, 2008 with an enrolment of fifteen students, a teaching principal and a secretary/teacher.  By the second year, the enrolment was forty-five students and consisted of a form one and two second form classes. The staff increased with one more full-time teacher and five voluntary teachers.  In the third year, August 2010, the enrolment was seventy-five students with one class from forms one to three.  The staff then consisted of one teaching principal, four full time teachers and the voluntary service of the Information Technology teacher from Victorious Nazarene Primary School which was occurring from the establishment of the school. Previously named Western Nazarene High at its inception, it was renamed on March 6, 2010 to honor the late Rev. Alvin L Young who was Belize’s first National District Superintendent of the Nazarene Church.   The school year commencing August 2011 saw an increase in enrollment and staff; one hundred forty students with two first form classes and one class at the other levels.  The staff increased to nine teachers including a full time Information Technology teacher.  On June 7, 2012 Alvin L Young Nazarene High held its first commencement exercise graduating thirteen students.  In 2014 the Ministry of Education implemented the financial reform program for secondary schools; our young institution was affected with a fall in enrollment as the other fully established high schools began to increase their intake of students.  This led to a revision of our vision statement and ‘vocational areas’ were included; Agriculture, Animation, Clothing, Fashion and Textiles, Graphics Design, and Technical Drawing.", 
        footerText: "At Alvin L. Young Nazarene High School, we provide a unique balance of classroom learning and experience-based education, preparing the next generation of talented professionals to become innovators and lifelong learners. "

    },
    contacts: {
        country: "Belize",
        address: "Nazarene street San Jose Succotz, Cayo Belize, C,A",
        phoneMain: "(+501) 671-8382",
        phoneAdditional: "(+501) 631-0725",
        email: "principal@alynhs.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 9:00 AM - 7:00 PM",
            saturday: "Saturday: 10:00 AM - 4:00 PM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/alvinyoungnazarene/?mibextid=LQQJ4d",
        instagram: "https://www.instagram.com/alvinlyoungnazarene?igshid=YmMyMTA2M2Y%3D",
        // linkedin: "https://www.linkedin.com/in/alvin-l-young-nazarene-high-school-8b4b25224",
        youtube: "https://www.youtube.com/channel/UC_EhE7tFM4KiZRkStVqT2RQ",
    },

    heroSlider: [
        {
            title: "BUILDING A BRIGHTER FUTURE",
            subtitle: "Empowering students with knowledge and Christian values since 1991.",
            buttonText: "Our Mission",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "A COMMUNITY OF FAITH & LEARNING",
            subtitle: "Nurturing young minds in a safe, supportive environment on the Old Northern Highway.",
            buttonText: "Student Life",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "UNLOCK YOUR TRUE POTENTIAL",
            subtitle: "Join a legacy of excellence. Your journey to success begins here.",
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
        'Diana Estrada': {
            subject: '',
            bio: 'Teacher/Vice Principal'
        },
        'Dee_Shanley': {
            subject: '',
            bio: 'Volunteer Teacher'
        },
    },
    galleryCaptions: {
      0: 'Example text',
      1: 'Example text',
      2: 'Example text',
    },

    stats: [
        { number: 1150, label: 'Active Students' },
        { number: 11, label: 'Expert Teachers' },
        { number: 2, label: 'Support Staff' }
    ] ,
};