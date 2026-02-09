import React from 'react';
import Hero from './components/Hero';
import FighterProfile from './components/FighterProfile';
import CareerRecord from './components/CareerRecord';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Transition from './components/Transition';
import CinematicBreaker from './components/CinematicBreaker';
import CinematicOverlay from './components/CinematicOverlay';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Intro Overlay - Pure CSS Animation */}
      <div className="intro-overlay">
        <div className="intro-text">ARSHIA</div>
        <div className="intro-subtext">3-0 UNDEFEATED</div>
      </div>
      
      <div className="app-container">
        <CinematicOverlay />
        {/* 1. Hero */}
        <Hero />

        {/* 2. Profile */}
        <FighterProfile />

        {/* BREAKER 1: THE MINDSET */}
        <CinematicBreaker
          image="/assets/kalandadze-clinch.jpg"
          subtitle="VISION & DISCIPLINE"
          title="THE MINDSET"
          mobileFocus="center"
          focus="top"
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
      <Analytics />
    </>
  );
}

export default App;
