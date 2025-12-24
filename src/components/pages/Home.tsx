import React from 'react';
import Hero from '../sections/Hero';
import Mission from '../sections/Mission';
import Events from '../sections/Events';
import Sponsors from '../sections/Sponsors';
import Newsletter from '../sections/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Events />
      <Sponsors />
      <Newsletter />
    </div>
  );
};

export default Home;