import React from 'react';
import './FighterProfile.css';
import { fighterProfile } from '../data/fighter';
import { calculateAge } from '../utils/date';

const FighterProfile = () => {
    const { personal, teams, identity } = fighterProfile;
    const age = calculateAge(personal.dob);

    return (
        <section className="profile-section">
            <div className="profile-container">
                <div className="profile-grid">
                    <div className="profile-item">
                        <span className="profile-label">Age</span>
                        <span className="profile-value">{age}</span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Height</span>
                        <span className="profile-value">{personal.height}</span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Weight Class</span>
                        <span className="profile-value">{identity.weightClass}</span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Nationality</span>
                        <span className="profile-value">{personal.nationality}</span>
                    </div>

                    <div className="profile-item full-width">
                        <span className="profile-label">Fighting Out Of</span>
                        <span className="profile-value">{personal.fightingOutOf}</span>
                    </div>

                    <div className="profile-item full-width">
                        <span className="profile-label">Primary Team</span>
                        <span className="profile-value team-primary">{teams.primary}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FighterProfile;
