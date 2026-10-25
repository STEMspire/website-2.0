import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const event = {
    date: 'January 2027',
    time: 'Time to be announced',
    title: 'Upcoming Computer Science Event',
    description:
      "We're planning a program for students interested in STEM. Expect hands-on learning, collaboration, and a chance to explore something new. Details coming soon.",
    location: 'Location to be announced',
    capacity: 'Limited spots',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const details = [
    { icon: Calendar, text: event.date },
    { icon: Clock, text: event.time },
    { icon: MapPin, text: event.location },
    { icon: Users, text: event.capacity },
  ];

  return (
    <section className="border-t border-gray-200 bg-cream py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10">
          <p className="eyebrow">Events</p>
          <h2 className="section-title">Next event</h2>
        </div>

        <div className="card grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-video md:aspect-auto">
            <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
          </div>

          <div className="p-6 md:p-10">
            <span className="mb-4 inline-block border border-navy px-2 py-1 font-mono text-xs uppercase tracking-wider text-navy">
              Coming soon
            </span>
            <h3 className="mb-3 text-2xl text-ink">{event.title}</h3>
            <p className="mb-6 leading-relaxed text-gray-600">{event.description}</p>

            <ul className="space-y-2 text-sm text-gray-700">
              {details.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-navy" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
