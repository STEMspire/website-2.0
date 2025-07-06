import React from 'react';
import { Instagram, MessageCircle, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const founders = [
    {
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
      }
    },
    {
      name: "Mihir Bapat",
      role: "Co-Founder",
      image: "images/founders/mihir-bapat.png",
      bio: "Focused on research and educational methodologies that make STEM learning engaging and effective. Mihir brings expertise in curriculum development and innovative teaching approaches.",
      social: {
        linkedin: "https://linkedin.com/in/mihir-bapat",
        email: "mihirnbapat@gmail.com"
      }
    },
    {
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
            We're a passionate team of educators, engineers, and innovators dedicated to inspiring the next generation of STEM leaders.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, STEMspire emerged from a shared vision of three educators who witnessed the incredible potential of students when given the right opportunities and mentorship. We believe that every student deserves access to quality STEM education, regardless of their background or circumstances. Through our programs, we've reached over 10,000 students and continue to grow our impact every day.
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
              href="https://discord.gg/stemspire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Join our Discord</span>
            </a>
            <a
              href="https://instagram.com/stemspire"
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