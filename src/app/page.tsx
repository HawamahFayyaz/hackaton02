// src/app/page.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import BestOfAirMax from './components/BestOfAirMax';
import Featured from './components/Featured';
import GearUp from './components/GearUp';
import DontMiss from './components/DontMiss';
import Essentials from './components/Essential';

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <BestOfAirMax/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>
    </div>
  );
};

export default HomePage;