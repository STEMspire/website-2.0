import React from 'react';
import { Instagram, MessageCircle, Mail, Linkedin } from 'lucide-react';
import PageIntro from '../PageIntro';

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: { linkedin?: string; email?: string };
}

const About = () => {
  const founders: Founder[] = [
    {
      name: "Ashray Mahadeva",
      role: "Executive Director",
      image: "/images/founders/IMG_7850.jpg",
      bio: "A dedicated educator with a passion for making STEM accessible to all.",
      social: {
        linkedin: "https://www.linkedin.com/in/ashray-gowda-mahadeva-0a41ab29a/",
        email: "ashrayg09@gmail.com"
      }
    },
    {
      name: "Aaditya Taleppady",
      role: "Executive Director",
      image: "/images/founders/aaditya-taleppady.png",
      bio: "A STEM educator empowering students through access, innovation, and experience.",
      social: {
        linkedin: "https://www.linkedin.com/in/aaditya-taleppady-15b2b1313/",
        email: "aadityar.taleppady@gmail.com"
      }
    },
    {
      name: "Mihir Bapat",
      role: "Executive Director",
      image: "/images/founders/mihir_headshot.png",
      bio: "A scientist and mentor who loves to inspire the next generation.",
      social: {
        linkedin: "https://www.linkedin.com/in/mihir-bapat/"
      }
    },
    {
      name: "Rohan Khanna",
      role: "Executive Director",
      image: "/images/founders/rohan_headshot.jpeg",
      bio: "Dedicated to inspiring students through hands-on STEM experiences. Rohan focuses on creating practical learning opportunities that connect classroom knowledge with real-world applications.",
      social: {
        email: "sargein185@gmail.com"
      }
    }
  ];

  return (
    <div>
      <PageIntro eyebrow="About" title="About STEMspire">
        We are a 501(c)(3) nonprofit organization, sponsored by the Hack Club Foundation, that aims to
        make STEM education fun and accessible for kids through interactive activities, workshops, and
        resources.
      </PageIntro>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">Where we started</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 lg:col-span-2">
            Founded in 2024, STEMspire grew out of a shared vision among its founders, who saw the
            potential students have when given the right opportunities and mentorship. We believe every
            student deserves access to quality STEM education, regardless of their background or
            circumstances. Through our programs, we've reached over 100 students and continue to grow our
            impact.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-gray-200 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10">
            <p className="eyebrow">Team</p>
            <h2 className="section-title">Meet the leadership team</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <div key={founder.name} className="card">
                <div className="aspect-square overflow-hidden border-b border-gray-200 bg-cream">
                  <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-ink">{founder.name}</h3>
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-navy">{founder.role}</p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{founder.bio}</p>
                  <div className="flex gap-3">
                    {founder.social.linkedin && (
                      <a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-navy"
                        aria-label={`${founder.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {founder.social.email && (
                      <a
                        href={`mailto:${founder.social.email}`}
                        className="text-gray-400 transition-colors hover:text-navy"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-navy py-16 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-2xl md:text-3xl">Connect with our community</h2>
            <p className="max-w-xl text-white/75">
              Join students, educators, and STEM professionals on Discord and Instagram.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="https://discord.gg/Gprm3Rures"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <MessageCircle className="h-4 w-4" />
              Join our Discord
            </a>
            <a
              href="https://www.instagram.com/stem_spire/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
