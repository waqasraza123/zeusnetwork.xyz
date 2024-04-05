import React from 'react';

function HeroSection() {
    return (
        <div className="flex items-center justify-center bg-gray-800 h-screen hero-section">
            <div className="hero-desktop-background"></div>
            <div className="text-center z-50">
                <h1 className="text-9xl text-primary font-bold mb-4">Bitcoin to Solana <br />Made Seamless</h1>
                <p className="text-primary text-lg mb-6">Cross-Chain Communication Layer Built on SVM</p>
                <button className="text-gradient-color px-6 py-3 shadow-lg transition-colors flex items-center mx-auto border-gradient-color border-2 border-linear-gradient-color animate-pulse">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#b283ff" }} />
                                <stop offset="25%" style={{ stopColor: "#fd83ff" }} />
                                <stop offset="50%" style={{ stopColor: "#ffd983" }} />
                                <stop offset="100%" style={{ stopColor: "#ffbf83" }} />
                            </linearGradient>
                        </defs>
                        <path d="M14.8679 6.191C14.6549 5.765 14.2259 5.5 13.7499 5.5H11.0969L12.1849 2.702C12.3339 2.317 12.2839 1.884 12.0509 1.543C11.8179 1.203 11.4319 1 11.0199 1H6.84992C6.32792 1 5.85592 1.329 5.67592 1.819L3.29092 8.32C3.15092 8.703 3.20792 9.132 3.44092 9.466C3.67492 9.8 4.05792 9.999 4.46492 9.999H8.25492L6.52792 16.043C6.42792 16.391 6.59092 16.76 6.91492 16.921C7.02192 16.974 7.13592 16.999 7.24892 16.999C7.47792 16.999 7.70292 16.893 7.84892 16.699L14.7509 7.5C15.0359 7.119 15.0809 6.618 14.8679 6.191Z" fill="url(#gradient)"></path>
                    </svg>
                    <span className="ml-2 text-black">How Zeus Works</span>
                </button>

            </div>
        </div>
    );
}

export default HeroSection;