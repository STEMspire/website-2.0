import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../PageIntro';

export const DONATION_URL = 'https://hcb.hackclub.com/donations/start/stemspire';

const Donate = () => {
  const uses = [
    {
      title: 'Workshops',
      description: 'Materials, kits, and tools for hands-on coding, robotics, and engineering sessions.',
    },
    {
      title: 'Chapters',
      description: 'Starter toolkits and event support for students launching STEMspire chapters in their communities.',
    },
    {
      title: 'Free resources',
      description: 'Lesson materials and learning tools like Career Quest that any student can use at no cost.',
    },
  ];

  return (
    <div>
      <PageIntro eyebrow="Donate" title="Support STEMspire">
        Your donation helps us bring hands-on STEM education to more students.
      </PageIntro>

      <section className="py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="eyebrow">Your impact</p>
            <h2 className="section-title mb-8">Where your donation goes</h2>
            <div className="border-l border-t border-gray-200">
              {uses.map((use, index) => (
                <div key={use.title} className="border-b border-r border-gray-200 p-6">
                  <div className="mb-3 font-mono text-sm text-navy">0{index + 1}</div>
                  <h3 className="mb-2 text-lg text-ink">{use.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{use.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="border border-navy p-6 md:p-8">
              <p className="mb-1 font-mono text-sm text-gray-600">Raised so far</p>
              <p className="mb-6 font-mono text-4xl font-semibold text-navy">$2,500+</p>
              <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Donate Now
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Donations are processed securely through HCB, Hack Club's nonprofit banking platform.
                STEMspire is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit, so your donation
                is tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="container-page">
          <p className="eyebrow">Other ways to help</p>
          <h2 className="section-title mb-8">Not ready to donate?</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              href="mailto:stemspire24@gmail.com?subject=Sponsorship%20Inquiry"
              className="card block p-6 transition-colors hover:border-navy"
            >
              <h3 className="mb-2 text-lg text-ink">Become a sponsor</h3>
              <p className="text-sm text-gray-600">Partner with us as a business or organization.</p>
            </a>
            <Link to="/get-involved" className="card block p-6 transition-colors hover:border-navy">
              <h3 className="mb-2 text-lg text-ink">Volunteer or mentor</h3>
              <p className="text-sm text-gray-600">Give your time to help students learn.</p>
            </Link>
            <a
              href="https://www.instagram.com/stem_spire/"
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-6 transition-colors hover:border-navy"
            >
              <h3 className="mb-2 text-lg text-ink">Spread the word</h3>
              <p className="text-sm text-gray-600">Follow and share @stem_spire on Instagram.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
