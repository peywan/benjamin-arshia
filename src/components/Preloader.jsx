import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let fontsLoaded = false;
        let imagesLoaded = false;
        let minTimeElapsed = false;

        // Minimum loading time for smooth experience (1 second)
        setTimeout(() => {
            minTimeElapsed = true;
            checkAllLoaded();
        }, 1000);

        // Check fonts
        if ('fonts' in document) {
            Promise.all([
                document.fonts.load('400 1em Anton'),
                document.fonts.load('400 1em Teko'),
                document.fonts.load('600 1em Caveat')
            ]).then(() => {
                fontsLoaded = true;
                checkAllLoaded();
            }).catch(() => {
                fontsLoaded = true;
                checkAllLoaded();
            });
        } else {
            fontsLoaded = true;
        }

        // Check images
        const images = document.querySelectorAll('img');
        if (images.length === 0) {
            imagesLoaded = true;
        } else {
            let loadedCount = 0;
            const totalImages = images.length;

            const imageLoadHandler = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    imagesLoaded = true;
                    checkAllLoaded();
                }
            };

            images.forEach(img => {
                if (img.complete) {
                    imageLoadHandler();
                } else {
                    img.addEventListener('load', imageLoadHandler);
                    img.addEventListener('error', imageLoadHandler);
                }
            });
        }

        // Initial check for images
        setTimeout(() => {
            imagesLoaded = true;
            checkAllLoaded();
        }, 2000);

        function checkAllLoaded() {
            if (fontsLoaded && minTimeElapsed) {
                setTimeout(() => {
                    setIsLoaded(true);
                    document.documentElement.classList.add('loaded');
                }, 200);
            }
        }

        return () => {
            document.documentElement.classList.remove('loaded');
        };
    }, []);

    return (
        <div className={`preloader ${isLoaded ? 'preloader-hidden' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-logo">
                    <span className="logo-text">ARSHIA</span>
                    <div className="logo-underline"></div>
                </div>
                <div className="preloader-subtitle">3-0 UNDEFEATED</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
