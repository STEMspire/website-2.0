import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../PageIntro';
import ImpactStats from '../ImpactStats';

// Paste the student sign-up Google Form URL here once it's ready
const STUDENT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScnQj1ntgUM84wLUd9I9lmbta_fSmpbidOMM02dvMJQiZK5Dg/viewform?usp=header";

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

      {/* Students */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 border border-navy lg:grid-cols-5">
            <div className="p-6 md:p-10 lg:col-span-3">
              <p className="eyebrow">For students</p>
              <h2 className="section-title mb-4">Join a workshop</h2>
              <p className="mb-6 max-w-xl leading-relaxed text-gray-600">
                Interested in coding, robotics, or engineering? Sign up to hear about upcoming workshops
                and events. All skill levels are welcome.
              </p>
              <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
                {["Hands-on projects", "No experience needed", "Learn from mentors", "Meet other students"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 bg-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3 border-t border-navy bg-navy-light p-6 md:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
              <p className="font-mono text-sm text-navy">Student sign-up form</p>
              {STUDENT_FORM_URL ? (
                <a
                  href={STUDENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Sign Up as a Student
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="btn w-full cursor-not-allowed border-gray-300 bg-white text-gray-400">
                  Form coming soon
                </span>
              )}
              <p className="text-xs text-gray-500">Parents and guardians are welcome to sign up on a student's behalf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="border-t border-gray-200 py-16 md:py-24">
        <div className="container-page mb-10">
          <p className="eyebrow">For volunteers &amp; partners</p>
          <h2 className="section-title">Help us grow</h2>
        </div>
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
