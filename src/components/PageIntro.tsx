import React from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

const PageIntro = ({ eyebrow, title, children }: PageIntroProps) => (
  <section className="border-b border-gray-200 bg-cream">
    <div className="container-page py-14 md:py-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mb-5 text-4xl text-navy md:text-5xl">{title}</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-gray-700">{children}</p>
    </div>
  </section>
);

export default PageIntro;
