import React, { useEffect, useRef, useState } from 'react';
import './CareerRecord.css';
import { professionalRecord, amateurRecord, fighterProfile } from '../data/fighter';

const FightGallery = ({ photos }) => {
    const galleryRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!galleryRef.current) return;
        const scrollLeft = galleryRef.current.scrollLeft;
        const itemWidth = galleryRef.current.querySelector('.gallery-image')?.offsetWidth || 500;
        const gap = 16; // var(--space-md)
        const newIndex = Math.round(scrollLeft / (itemWidth + gap));
        setActiveIndex(Math.min(newIndex, photos.length - 1));
    };

    const scrollToIndex = (index) => {
        if (!galleryRef.current) return;
        const itemWidth = galleryRef.current.querySelector('.gallery-image')?.offsetWidth || 500;
        const gap = 16;
        galleryRef.current.scrollTo({
            left: index * (itemWidth + gap),
            behavior: 'smooth'
        });
    };

    return (
        <div className="fight-gallery-wrapper">
            <div 
                className="fight-gallery" 
                ref={galleryRef}
                onScroll={handleScroll}
            >
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Action shot ${index + 1}`}
                        className="gallery-image"
                        onClick={() => window.open(photo, '_blank')}
                    />
                ))}
            </div>
            
            {photos.length > 1 && (
                <>
                    <div className="gallery-indicators">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                className={`gallery-dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => scrollToIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="swipe-hint">
                        <span>Swipe</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </>
            )}
        </div>
    );
};

const TimelineItem = ({ fight }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Trigger flash if it's a TKO/KO win
                    if (fight.method.includes('TKO') || fight.method.includes('KO')) {
                        const flash = document.createElement('div');
                        flash.className = 'flash-trigger';
                        document.body.appendChild(flash);
                        setTimeout(() => flash.remove(), 250);
                    }
                }
            },
            {
                threshold: 0.4,
                rootMargin: "0px 0px -10% 0px" // Trigger when it's well into value
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) observer.unobserve(itemRef.current);
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`timeline-item ${fight.highlightBroadcast ? 'highlight-broadcast' : ''}`}
        >
            <div className="timeline-dot"></div>
            <span className="timeline-date">{new Date(fight.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>

            <div className="timeline-content">
                <div className="fight-info">
                    <div>
                        <h3 className="opponent-name">vs {fight.opponent}</h3>
                        <span className="event-name">{fight.event}</span>
                    </div>
                    <div className="fight-result">
                        <span className={`result-badge ${fight.result === 'Win' ? 'win' : ''}`}>
                            {fight.result}
                        </span>
                        <span className="method-text">{fight.method}</span>
                        <span className="method-text">R{fight.round} {fight.time}</span>
                    </div>
                </div>

                {fight.highlightBroadcast && fight.photos && fight.photos.length > 0 && (
                    <div className="fight-media-container">
                        {/* All photos in one horizontal carousel */}
                        <FightGallery photos={fight.photos} />
                    </div>
                )}
            </div>
        </div>
    );
};

const CareerRecord = ({ type }) => {
    const records = type === 'professional' ? professionalRecord : amateurRecord;
    // Prompt says "Professional debut 29 June 2024. Timeline begins there. All before is Amateur."
    // We only have Pro records populated right now.

    if (records.length === 0) return null;

    return (
        <section className="career-section">
            <div className="record-container">
                <div className="record-header">
                    <h2 className="record-title">{type} Record</h2>
                    <span className="record-subtitle">
                        {type === 'professional' ? fighterProfile.identity.record : ''}
                    </span>
                </div>

                <div className="timeline-list">
                    {records.map((fight) => (
                        <TimelineItem key={fight.id} fight={fight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerRecord;
