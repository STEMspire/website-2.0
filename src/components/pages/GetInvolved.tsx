import React from 'react';
import { Heart, Users, GraduationCap, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Volunteer",
      description: "Join our team of passionate volunteers and help us organize events, mentor students, and support our mission. No experience required – just enthusiasm for STEM education!",
      benefits: ["Flexible scheduling", "Training provided", "Community impact", "Professional development"],
      cta: "Become a Volunteer",
      link: "#volunteer"
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Donate",
      description: "Your donation helps us provide scholarships, equipment, and resources to students who need them most. Every contribution makes a difference in a student's STEM journey.",
      benefits: ["Tax deductible", "Transparent impact", "Regular updates", "Recognition program"],
      cta: "Make a Donation",
      link: "#donate"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-green-600" />,
      title: "Mentor",
      description: "Share your expertise and experience with the next generation. Our mentorship program connects professionals with students for one-on-one guidance and career advice.",
      benefits: ["Flexible commitment", "Structured program", "Meaningful connections", "Personal growth"],
      cta: "Become a Mentor",
      link: "#mentor"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to inspire and empower the next generation of STEM leaders. There are many ways to make a difference.
          </p>
        </div>

        {/* Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                {opportunity.icon}
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={opportunity.link}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>{opportunity.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600">See the difference we're making together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have 1 hour or 10 hours to spare, there's a place for you in our community. Join us in creating a brighter future for STEM education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:volunteer@stemspire.org"
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

export default GetInvolved;