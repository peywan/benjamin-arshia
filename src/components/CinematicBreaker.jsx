import React, { useEffect, useRef } from 'react';
import './CinematicBreaker.css';

const CinematicBreaker = ({ image, title, subtitle, focus = 'center' }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="cinematic-breaker" ref={sectionRef}>
            <img
                src={image}
                alt={title}
                className={`breaker-image ${focus === 'top' ? 'top-focus' : ''}`}
            />
            <div className="breaker-overlay"></div>

            <div className="breaker-content">
                <span className="breaker-subtitle">{subtitle}</span>
                <h2 className="breaker-title">{title}</h2>
            </div>
        </section>
    );
};

export default CinematicBreaker;
