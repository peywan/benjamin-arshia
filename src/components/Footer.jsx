import React from 'react';
import './Footer.css';
import { fighterProfile } from '../data/fighter';

const Footer = () => {
    const { identity, teams } = fighterProfile;

    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-name">{identity.givenName}</span>
                <span>{identity.discipline}</span>
                <span>{teams.primary}</span>
            </div>
        </footer>
    );
};

export default Footer;
