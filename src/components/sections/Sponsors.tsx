import React from 'react';

const Sponsors = () => {
  return (
    <section className="border-t border-gray-200 py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our sponsor</p>
            <h2 className="section-title mb-4">Supported by Hack Club</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              STEMspire is fiscally sponsored by Hack Club, so all donations are tax-deductible through
              Hack Club's 501(c)(3) nonprofit status.
            </p>
            <p className="leading-relaxed text-gray-600">
              Thank you to Hack Club for their support of student-led initiatives. It makes it possible
              for us to bring STEM education to more communities.
            </p>
          </div>

          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-center p-12 transition-colors hover:border-navy"
          >
            <img
              src="https://assets.hackclub.com/flag-orpheus-left.svg"
              alt="Hack Club"
              className="w-full max-w-xs"
            />
          </a>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 bg-navy p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="mb-2 text-2xl">Become a sponsor</h3>
            <p className="max-w-xl text-white/75">
              Your sponsorship directly expands students' access to STEM education and opportunities.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="mailto:stemspire24@gmail.com?subject=Sponsorship%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20becoming%20a%20sponsor.%20Please%20send%20me%20more%20information.%0A%0AThank%20you%2C"
              className="btn-light"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
