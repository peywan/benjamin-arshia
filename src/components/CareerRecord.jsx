import React, { useEffect, useRef } from 'react';
import './CareerRecord.css';
import { professionalRecord, amateurRecord, fighterProfile } from '../data/fighter';

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

    // Use videoPoster if available, otherwise fallback
    const displayImage = fight.videoPoster || (fight.photos && fight.photos.length > 0 ? fight.photos[0] : "/assets/uploaded_image_3_1768410792000.jpg");

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

                {fight.highlightBroadcast && (
                    <div className="fight-media">
                        {/* Video Placeholder or Poster */}
                        {fight.videoSrc ? (
                            <video
                                src={fight.videoSrc}
                                poster={fight.videoPoster}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="video-player"
                            />
                        ) : (
                            <img src={displayImage} alt="Fight Highlight" className="video-placeholder" />
                        )}
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
