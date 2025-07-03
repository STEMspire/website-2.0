import React from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const Mission = () => {
  const missions = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Inspire Excellence",
      description: "Cultivate a passion for STEM learning through engaging experiences that spark curiosity and drive innovation."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Build Community",
      description: "Create an inclusive environment where students from all backgrounds can thrive and support each other's growth."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Foster Innovation",
      description: "Encourage creative problem-solving and critical thinking skills essential for tomorrow's challenges."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Launch Careers",
      description: "Provide mentorship and resources to help students pursue successful careers in STEM fields."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to breaking down barriers and creating opportunities for all students to excel in STEM fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Together, We're Building the Future</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join us in our mission to empower the next generation of innovators, problem-solvers, and leaders who will shape our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-blue-100">Active Mentors</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-blue-100">Partner Schools</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-blue-100">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;