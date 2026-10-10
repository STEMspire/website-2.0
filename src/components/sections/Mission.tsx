import React from 'react';
import ImpactStats from '../ImpactStats';

const Mission = () => {
  const missions = [
    {
      title: 'Inspire Excellence',
      description:
        'Cultivate a passion for STEM learning through engaging experiences that spark curiosity and drive innovation.',
    },
    {
      title: 'Build Community',
      description:
        "Create an inclusive environment where students from all backgrounds can thrive and support each other's growth.",
    },
    {
      title: 'Foster Innovation',
      description:
        "Encourage creative problem-solving and critical thinking skills essential for tomorrow's challenges.",
    },
    {
      title: 'Launch Careers',
      description:
        'Provide mentorship and resources to help students pursue successful careers in STEM fields.',
    },
  ];


  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Our mission</p>
          <h2 className="section-title mb-4">Opportunity for every student</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We're committed to breaking down barriers and creating opportunities for all students to
            excel in STEM.
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <div key={mission.title} className="border-b border-r border-gray-200 p-6">
              <div className="mb-6 font-mono text-sm text-navy">0{index + 1}</div>
              <h3 className="mb-3 text-lg text-ink">{mission.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>

        <ImpactStats className="mt-12" />
      </div>
    </section>
  );
};

export default Mission;
