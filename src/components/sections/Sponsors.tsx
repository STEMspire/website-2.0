import React from 'react';
import { Heart } from 'lucide-react';

const Sponsors = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Our Amazing Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are incredibly grateful to our sponsors who make STEMspire possible. As a Hack Club fiscally sponsored organization, all donations are tax-deductible through Hack Club's 501(c)(3) nonprofit status.
          </p>
        </div>

        {/* Partner Sponsor Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="text-3xl">🤝</span>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
              PARTNER Sponsor
            </h3>
          </div>
        </div>

        {/* Hack Club Logo */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-2xl p-12 border-2 border-gray-700 hover:border-purple-500 transition-all shadow-2xl max-w-md w-full">
            <a
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://assets.hackclub.com/flag-orpheus-left.svg"
                alt="Hack Club Logo"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 mb-12">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A huge thank you to <span className="text-purple-400 font-semibold">Hack Club</span> for their incredible support and partnership. Their commitment to empowering student-led initiatives makes it possible for us to bring quality STEM education to communities everywhere.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Become a Sponsor
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
            Join Hack Club in supporting the next generation of STEM leaders. Your sponsorship directly impacts students' access to quality STEM education and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@stemspire.org?subject=Sponsorship%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20becoming%20a%20sponsor.%20Please%20send%20me%20more%20information.%0A%0AThank%20you%2C"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="/get-involved"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;