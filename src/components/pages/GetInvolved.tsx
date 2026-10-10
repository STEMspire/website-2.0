import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../PageIntro';
import ImpactStats from '../ImpactStats';

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Volunteer",
      description: "Join our team of volunteers and help us organize events, mentor students, and support our mission. No experience required, just enthusiasm for STEM education.",
      benefits: ["Flexible scheduling", "Training provided", "Community impact", "Professional development"],
      cta: "Become a Volunteer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeLbnC__nI7zoiDvqZ5VeitUxvT354ljWx_zKfgFMInbIu6Gw/viewform?usp=sf_link"
    },
    {
      title: "Register a Chapter",
      description: "Start a chapter and bring STEM opportunities directly to students in your community. You'll gain access to resources, mentorship, and programs designed to help students explore engineering, coding, and innovation.",
      benefits: ["Funding opportunities", "Starter toolkit", "Branding materials", "Event support"],
      cta: "Start a Chapter",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfa722cWl3cFXHzT0RknpXxgGpEsWHIQOtj9kfPNOeY3sgelQ/viewform?usp=sf_link"
    },
    {
      title: "Mentor",
      description: "Share your expertise and experience with the next generation. Our mentorship program connects professionals with students for one-on-one guidance and career advice.",
      benefits: ["Flexible commitment", "Structured program", "Meaningful connections", "Personal growth"],
      cta: "Become a Mentor",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdyqD-ygn2G8CTsHSevmVChvqngVX71MIACj2XNsrttRhBLlg/viewform?usp=dialog"
    }
  ];


  return (
    <div>
      <PageIntro eyebrow="Get involved" title="Make a difference">
        Join our mission to inspire and empower the next generation of STEM leaders. There are several
        ways to help.
      </PageIntro>

      {/* Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <div key={opportunity.title} className="card flex flex-col p-6 md:p-8">
              <div className="mb-6 font-mono text-sm text-navy">0{index + 1}</div>
              <h2 className="mb-3 text-2xl text-ink">{opportunity.title}</h2>
              <p className="mb-6 leading-relaxed text-gray-600">{opportunity.description}</p>

              <ul className="mb-8 space-y-2 border-t border-gray-200 pt-5 text-sm text-gray-700">
                {opportunity.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 bg-navy" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={opportunity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto w-full"
              >
                {opportunity.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="container-page">
          <p className="eyebrow">Our impact</p>
          <ImpactStats className="mt-6" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-2xl md:text-3xl">Ready to help?</h2>
            <p className="max-w-xl text-white/75">
              Whether you have one hour or ten to spare, there's a place for you in our community.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="mailto:stemspire24@gmail.com?subject=Interested%20in%20Getting%20Involved&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20getting%20involved%20with%20your%20organization.%20Please%20let%20me%20know%20the%20next%20steps!%0A%0AThank%20you%2C"
              className="btn-light"
            >
              Contact Us
            </a>
            <Link to="/about" className="btn-outline-light">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
