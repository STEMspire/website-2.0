import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, MapPin, Trophy } from 'lucide-react';
import PageIntro from '../PageIntro';
import ImpactStats from '../ImpactStats';

const Projects = () => {
  const workshopTopics = [
    {
      title: "Coding & Programming",
      description: "Introduction to Python, web development, and computational thinking"
    },
    {
      title: "Robotics & Engineering",
      description: "Hands-on robot building, circuit design, and mechanical engineering"
    },
    {
      title: "Design Thinking",
      description: "Engineering design process, prototyping, and creative problem-solving"
    }
  ];


  // Add each topic's Google Drive folder URL to `link` once the slides are ready
  const curriculum = [
    { title: "Topic 1", link: "" },
    { title: "Topic 2", link: "" },
    { title: "Topic 3", link: "" },
    { title: "Topic 4", link: "" },
    { title: "Topic 5", link: "" },
    { title: "Topic 6", link: "" },
  ];

  const details = [
    { icon: Trophy, label: "Impact", value: "50+ students reached" },
    { icon: Calendar, label: "Date", value: "April 5-7, 2025" },
    { icon: MapPin, label: "Location", value: "Zoom" },
  ];


  return (
    <div>
      <PageIntro eyebrow="Projects" title="Our projects">
        Hands-on learning experiences that help students build real STEM skills.
      </PageIntro>

      {/* Featured projects */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10">
            <p className="eyebrow">Highlights</p>
            <h2 className="section-title">Featured projects</h2>
          </div>
          <div className="card">
            <img
              src="/images/photos/tinkercad-workshop.jpg"
              alt="A 3D mug modeled in Tinkercad during the STEM Workshop Series"
              className="max-h-[420px] w-full border-b border-gray-200 object-cover"
            />
            <div className="p-6 md:p-10">
              <span className="mb-4 inline-block border border-navy px-2 py-1 font-mono text-xs uppercase tracking-wider text-navy">
                Completed
              </span>
              <h2 className="section-title mb-4">STEM Workshop Series</h2>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">
                Our flagship program offering hands-on workshops that cover robotics, coding, and engineering
                design. These interactive sessions are designed for students of
                all skill levels, from beginners to advanced learners, building curiosity and practical STEM
                skills.
              </p>

              <dl className="mb-8 grid grid-cols-1 gap-6 border-y border-gray-200 py-6 md:grid-cols-3">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-wider text-gray-500">{label}</dt>
                      <dd className="text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/get-involved" className="btn-primary">
                  Get Involved
                </Link>
                <a
                  href="mailto:stemspire24@gmail.com?subject=Workshop%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20workshop%20series.%0A%0AThank%20you%2C"
                  className="btn-outline"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop topics */}
      <section className="border-t border-gray-200 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10">
            <p className="eyebrow">Workshop series</p>
            <h2 className="section-title">Workshop topics</h2>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-gray-200 md:grid-cols-3">
            {workshopTopics.map((topic, index) => (
              <div key={topic.title} className="border-b border-r border-gray-200 p-6">
                <div className="mb-6 font-mono text-sm text-navy">0{index + 1}</div>
                <h3 className="mb-2 text-lg text-ink">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-t border-gray-200 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Curriculum</p>
            <h2 className="section-title mb-4">Lesson materials</h2>
            <p className="leading-relaxed text-gray-600">
              Slides and resources from our workshops, organized by topic.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((topic, index) => {
              const content = (
                <>
                  <div className="mb-6 font-mono text-sm text-navy">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mb-2 text-lg text-ink">{topic.title}</h3>
                  {topic.link ? (
                    <span className="inline-flex items-center gap-1 font-mono text-sm text-navy">
                      View slides <ArrowUpRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="font-mono text-sm text-gray-400">Slides coming soon</span>
                  )}
                </>
              );

              return topic.link ? (
                <a
                  key={topic.title}
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block p-6 transition-colors hover:border-navy"
                >
                  {content}
                </a>
              ) : (
                <div key={topic.title} className="card p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-gray-200 py-16">
        <div className="container-page">
          <p className="eyebrow">Our impact</p>
          <ImpactStats className="mt-6" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-2xl md:text-3xl">Bring this to your school</h2>
            <p className="max-w-xl text-white/75">
              We're always looking to bring hands-on STEM education to more students. Get in touch to
              discuss a workshop series for your school or community.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="mailto:stemspire24@gmail.com?subject=Workshop%20Partnership%20Inquiry&body=Hi%20STEMspire%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20bringing%20your%20workshop%20series%20to%20our%20school%2Fcommunity.%0A%0AThank%20you%2C"
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

export default Projects;
