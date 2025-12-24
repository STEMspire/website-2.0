import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const event = {
    date: "TBD — Spring 2026",
    time: "Time To Be Announced",
    title: "Upcoming Computer Science Event",
    description: "We’re planning an exciting program for students interested in STEM — details coming soon! Expect hands-on learning, collaboration, and an opportunity to explore something new.",
    location: "Location Will Be Announced",
    capacity: "Limited Spots — Details Soon",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Next Event Coming Soon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re finalizing the details — stay tuned for announcements!
          </p>
        </div>

        {/* Placeholder Event Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-2xl mx-auto">
          <div className="aspect-video overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center text-blue-600 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{event.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

            <div className="space-y-2 mb-5">
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.capacity}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 opacity-70 cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold">
              Details Coming Soon
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;