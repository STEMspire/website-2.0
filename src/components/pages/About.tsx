import React from 'react';
import { Instagram, MessageCircle, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const founders = [
    {
<<<<<<< HEAD
      name: "Akhil Pasumarthy",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "An advocate for hands-on learning and interactive STEM experiences",
      social: {
        linkedin: "https://www.linkedin.com/in/akhil-pasumarthy-916379365/",
        email: "akhil.pvenkat@gmail.com"
      }
    },
    {
      name: "Ashray Mahadeva",
      role: "Co-Founder",
      image: "https://github.com/STEMspire/website-2.0/blob/main/public/images/founders/IMG_7850.jpg?raw=true",
      bio: "A dedicated educator with a passion for making STEM accessible to all.",
      social: {
        linkedin: "https://www.linkedin.com/in/ashray-gowda-mahadeva-0a41ab29a/",
        email: "ashrayg09@gmail.com"
      }
    },
    {
      name: "Aaditya Taleppady",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "A STEM educator empowering students through access, innovation, and experience.",
      social: {
        linkedin: "https://www.linkedin.com/in/aaditya-taleppady-15b2b1313/",
        email: "aadityar.taleppady@gmail.com"
      }
    },
    {
      name: "Aadi Bhat",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "A tech enthusiast focused on integrating innovation into education.",
      social: {
        linkedin: "https://www.linkedin.com/in/aadi-bhat/",
        email: "aadibhat09@gmail.com"
=======
      name: "Ashray Mahadeva",
      role: "Co-Founder",
      image: "images/founders/ashray-mahadeva.png",
      bio: "Dedicated to bridging the gap between industry and education. Ashray brings extensive experience in technology and mentorship, working to create opportunities for students to explore and excel in STEM fields.",
      social: {
        linkedin: "https://linkedin.com/in/ashray-gowda-mahadeva-0a41ab29a",
        email: "ashrayg09@gmail.com"
      }
    },
    {
      name: "Aadi Bhat",
      role: "Co-Founder",
      image: "images/founders/aadi-bhat.png",
      bio: "Passionate about making STEM education accessible to all students. With a strong background in technology and education, Aadi focuses on building innovative programs that inspire the next generation of STEM leaders.",
      social: {
        linkedin: "https://linkedin.com/in/aadi-bhat",
        email: "aadibhat09@gmail.com"
      }
    },
    {
      name: "Akhil Pasumarthy",
      role: "Co-Founder",
      image: "images/founders/akhil-pasumarthy.png",
      bio: "Committed to empowering students through quality STEM education. Akhil focuses on developing innovative curricula and mentorship programs that help students discover their passion for science and technology.",
      social: {
        linkedin: "https://linkedin.com/in/akhil-pasumarthy-916379365",
        email: "akhil.pvenkat@gmail.com"
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
      }
    },
    {
      name: "Mihir Bapat",
      role: "Co-Founder",
<<<<<<< HEAD
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "A scientist and mentor who loves to inspire the next generation.",
      social: {
        linkedin: "https://www.linkedin.com/in/mihir-bapat/",
=======
      image: "images/founders/mihir-bapat.png",
      bio: "Focused on research and educational methodologies that make STEM learning engaging and effective. Mihir brings expertise in curriculum development and innovative teaching approaches.",
      social: {
        linkedin: "https://linkedin.com/in/mihir-bapat",
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
        email: "mihirnbapat@gmail.com"
      }
    },
    {
<<<<<<< HEAD
      name: "Rohan Khanna",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "A leader in STEM outreach, connecting young minds to real-world applications.",
      social: {
        linkedin: " ",
=======
      name: "Aaditya Taleppady",
      role: "Co-Founder",
      image: "images/founders/aaditya-taleppady.png",
      bio: "Passionate about creating inclusive STEM learning environments. Aaditya works on developing programs that reach diverse student populations and provide equal opportunities for all.",
      social: {
        linkedin: "https://linkedin.com/in/aaditya-taleppady-15b2b1313",
        email: "aadityar.taleppady@gmail.com"
      }
    },
    {
      name: "Rohan Khanna",
      role: "Co-Founder",
      image: "images/founders/rohan-khanna.png",
      bio: "Dedicated to inspiring students through hands-on STEM experiences. Rohan focuses on creating practical learning opportunities that connect classroom knowledge with real-world applications.",
      social: {
        linkedin: "https://linkedin.com/in/placeholder",
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
        email: "sargein185@gmail.com"
      }
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About STEMspire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We aim to make STEM education fun and accessible for kids through interactive activities, workshops, and resources.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Founded in 2024, STEMspire emerged from a shared vision of three educators who witnessed the incredible potential of students when given the right opportunities and mentorship. We believe that every student deserves access to quality STEM education, regardless of their background or circumstances. Through our programs, we've reached over 10,000 students and continue to grow our impact every day.
=======
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{founder.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect with Us */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Connect With Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our vibrant community of students, educators, and STEM professionals. Connect with us on social media and stay updated on our latest initiatives.
          </p>
          <div className="flex justify-center space-x-6">
            <a
<<<<<<< HEAD
              href="https://discord.gg/qtTPXXth"
=======
              href="https://discord.gg/TCNeCRQyuE"
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Join our Discord</span>
            </a>
            <a
<<<<<<< HEAD
              href="https://www.instagram.com/stem_spire/"
=======
              href="https://instagram.com/stem_spire"
>>>>>>> 93e984bd61b285e65a7dfe328e01e55d364f4b25
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;