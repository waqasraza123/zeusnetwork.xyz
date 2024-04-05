import React from 'react';

function StepContent({title, tagline, description}) {
    return (
        <>
            <h2 className="text-primary text-2xl font-bold mb-4">{title}</h2>
            <p className="text-primary text-5xl font-bold mb-4">{tagline}</p>
            <p className="text-primary text-md mb-4">{description}</p>
        </>
    );
}

export default StepContent;