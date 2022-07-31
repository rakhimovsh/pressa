import React from 'react';
import Hero from '../components/hero/hero';
import Announcements from '../components/announcements';
import Ads from '../components/ads';

function Home() {
  return (
    <>
      <Hero />
      <Announcements />
      <Ads />
    </>
  );
}

export default Home;