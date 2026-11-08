import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="border-b border-gray-200 bg-cream">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">STEM education nonprofit</p>
          <h1 className="mb-6 text-4xl leading-tight text-navy md:text-5xl lg:text-6xl">
            Inspiring the next generation of STEM leaders
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-700">
            We run hands-on workshops, mentorship, and events that help students explore science,
            technology, engineering, and math.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/get-involved" className="btn-primary">
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-outline">
              About Us
            </Link>
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden border border-gray-200">
          <img
            src="/images/photos/students-laptops.jpg"
            alt="STEMspire students working on laptops at a workshop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
