import React from 'react';
import './Hero.css';
import { fighterProfile } from '../data/fighter';

// Using the NEW high-quality portrait image
const HERO_IMAGE_PATH = '/assets/bbenjaminherolsectionnew.jpeg';

const Hero = () => {
    const { identity } = fighterProfile;

    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src={HERO_IMAGE_PATH}
                    alt={identity.givenName}
                    className="hero-image"
                />
                <div className="hero-overlay"></div>
                <div className="hero-grain"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-fight-name">{identity.fightName}</h1>
                <span className="hero-given-name">{identity.givenName}</span>

                <div className="hero-details">
                    <div className="hero-detail-item">
                        {identity.discipline}
                    </div>
                    <div className="hero-detail-item">
                        Record {identity.record.replace('-', ' ')}
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
