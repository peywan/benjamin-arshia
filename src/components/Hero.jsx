import React from 'react';
import './Hero.css';
import { fighterProfile } from '../data/fighter';

// Using the portrait image
const HERO_IMAGE_PATH = '/assets/hero-v2.jpg';

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
        </section>
    );
};

export default Hero;
