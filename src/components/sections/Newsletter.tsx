import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email);
      setIsSubscribed(true);
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="border-t border-gray-200 bg-cream py-16">
      <div className="container-page grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-2xl text-ink md:text-3xl">Stay connected</h2>
          <p className="text-gray-600">Get updates on events, opportunities, and what we're working on.</p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1 border border-gray-300 bg-white px-4 py-3 text-ink placeholder-gray-400 focus:border-navy focus:outline-none"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="border border-navy bg-white px-4 py-3 font-mono text-sm text-navy">
            Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
