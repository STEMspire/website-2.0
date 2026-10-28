import React from 'react';

const stats = [
  { value: '100+', label: 'Students reached' },
  { value: '15+', label: 'Volunteers' },
  { value: '4', label: 'Chapters' },
  { value: '$2,500+', label: 'Fundraised' },
];

const ImpactStats = ({ className = '' }: { className?: string }) => (
  <dl className={`grid grid-cols-2 gap-8 md:grid-cols-4 ${className}`}>
    {stats.map((stat) => (
      <div key={stat.label} className="flex flex-col-reverse">
        <dt className="text-sm text-gray-600">{stat.label}</dt>
        <dd className="font-mono text-3xl font-semibold text-navy">{stat.value}</dd>
      </div>
    ))}
  </dl>
);

export default ImpactStats;
