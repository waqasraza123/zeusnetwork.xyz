import React from 'react';

const InvestorCard = ({ name, position, logoSrc, alt }) => {
    return (
        <div className="p-4">
            <div className="border border-2 border-primary rounded-lg overflow-hidden group relative">
                {/* Overlay elements */}
                <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300 group-hover:opacity-50"></div>
                {/* Add more overlay elements as needed */}
                <div className="p-4">
                    <div className="mb-4 relative overflow-hidden">
                        {/* Apply hover animation to the image */}
                        <img src={logoSrc} alt={alt} className="w-full h-auto rounded-lg mx-auto transition-transform duration-300 transform group-hover:scale-110" />
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-semibold mb-1">{name}</div>
                        <div className="text-sm text-primary">{position}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorCard;