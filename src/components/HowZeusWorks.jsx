import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function HowZeusWorks() {
    const HowZeusWorksTitle = "How Zeus Works";
    const [typedTitle, setTypedTitle] = useState('');
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= HowZeusWorksTitle.length) {
                setTypedTitle(HowZeusWorksTitle.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <div ref={ref}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary text-center text-7xl font-bold mb-10"
                >
                    {typedTitle}
                </motion.h1>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-3/4">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-4">
                        <h2 className="text-primary text-2xl font-bold mb-4">Step 1</h2>
                        <p className="text-primary text-5xl font-bold mb-4">Chain-agnostic transactions are proposed and stored on Solana</p>
                        <p className="text-primary text-md mb-4">Bitcoin and Solana transactions are first proposed by Zeus Nodes and then submitted to Zeus program states</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-4">
                        {/* Content for the second div of the first row */}
                    </div>
                </div>
            </div>
            {/* Add more rows here */}
        </div>
    );
}

export default HowZeusWorks;