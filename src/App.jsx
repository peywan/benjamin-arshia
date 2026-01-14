import React from 'react';
import Hero from './components/Hero';
import FighterProfile from './components/FighterProfile';
import CareerRecord from './components/CareerRecord';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Transition from './components/Transition';
import CinematicBreaker from './components/CinematicBreaker';

function App() {
  return (
    <div className="app-container">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Profile */}
      <FighterProfile />

      {/* BREAKER 1: THE MINDSET */}
      <CinematicBreaker
        image="/assets/fight-detail-blue.png"
        subtitle="VISION & DISCIPLINE"
        title="THE MINDSET"
      />

      {/* 3. Record */}
      <CareerRecord type="professional" />
      <Transition />

      {/* BREAKER 2: THE DOMINANCE */}
      <CinematicBreaker
        image="/assets/ground-game.jpg"
        subtitle="NO COMPROMISE"
        title="PURE DOMINANCE"
      />

      {/* 4. Highlights */}
      <Highlights />

      {/* BREAKER 3: THE GLORY */}
      <CinematicBreaker
        image="/assets/win-raising-hand-2.jpg"
        subtitle="UNDISPUTED"
        title="THE GLORY"
        focus="top"
      />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}

export default App;
