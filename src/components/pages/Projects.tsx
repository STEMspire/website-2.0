import React from 'react';
import { Calendar, MapPin, Users, Trophy, ArrowRight, Code, Cpu, Microscope, Beaker } from 'lucide-react';

const Projects = () => {
  const workshopTopics = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Coding & Programming",
      description: "Introduction to Python, web development, and computational thinking"
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600" />,
      title: "Robotics & Engineering",
      description: "Hands-on robot building, circuit design, and mechanical engineering"
    },
    {
      icon: <Microscope className="h-12 w-12 text-green-600" />,
      title: "Scientific Exploration",
      description: "Biology, chemistry, and physics experiments with real-world applications"
    },
    {
      icon: <Beaker className="h-12 w-12 text-red-600" />,
      title: "Design Thinking",
      description: "Engineering design process, prototyping, and creative problem-solving"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiring the next generation of STEM leaders through hands-on learning experiences.
          </p>
        </div>

        {/* Main Project Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-start justify-between mb-6">
            <div className="text-6xl">🔬</div>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              Completed
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            STEM Workshop Series
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our flagship program offering monthly hands-on workshops that cover robotics, coding, engineering design, and scientific exploration. These interactive sessions are designed for students of all skill levels, from beginners to advanced learners, fostering curiosity and building practical STEM skills.
          </p>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Trophy className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Impact</div>
                <div className="text-gray-600">300+ students reached</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Date</div>
                <div className="text-gray-600">April 5-7, 2025</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Location</div>
                <div className="text-gray-600">Zoom</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/get-involved"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@stemspire.org?subject=Workshop%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20workshop%20series.%0A%0AThank%20you%2C"
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* Event Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                alt="Students learning robotics"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" 
                alt="Students coding together"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop" 
                alt="Workshop presentation"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop" 
                alt="Science experiments"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" 
                alt="Students working on projects"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Workshop Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Workshop Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600">See the difference we're making together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Workshops Held</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Want to Bring This to Your School?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking to expand our reach and bring hands-on STEM education to more students. Contact us to discuss bringing our workshop series to your school or community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@stemspire.org?subject=Workshop%20Partnership%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20bringing%20your%20workshop%20series%20to%20our%20school%2Fcommunity.%0A%0AThank%20you%2C"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Today
            </a>
            <a
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;