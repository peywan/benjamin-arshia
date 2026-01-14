import React, { useEffect, useRef, useState } from 'react';
import './Highlights.css';
import { fighterProfile } from '../data/fighter';

const HighlightItem = ({ text, delay }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Simple, subtle fade in
                    entry.target.classList.add('active');
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div className="highlight-item" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
            {text}
        </div>
    );
};

const Highlights = () => {
    const { highlights } = fighterProfile;

    return (
        <section className="highlights-section">
            <div className="highlights-container">
                {highlights.map((text, index) => (
                    <HighlightItem key={index} text={text} delay={index * 100} />
                ))}
            </div>
        </section>
    );
};

export default Highlights;
