import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import StepContent from './StepContent';
import '../assets/css/howZeusWorks.css';

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
        <div className='bg-darkBlack text-primary py-8'>
            <div className="flex flex-col items-center justify-center">
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

                    <div className="w-full md:w-1/2 flex items-center justify-center border-2 border-primary">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                        <StepContent 
                            title="Step 1"
                            tagline="Chain-agnostic transactions are proposed and stored on Solana"
                            description="Bitcoin and Solana transactions are first proposed by Zeus Nodes and then submitted to Zeus program states"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                            <StepContent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8">

                {/* 2nd row */}
                <div className="flex flex-col md:flex-row w-full md:w-3/4">
                    <div className="w-full md:w-1/2 flex items-center justify-center border-2 border-primary">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                        <StepContent 
                            title="Step 2"
                            tagline="Signature are signed and aggregated on Zeus layer"
                            description="Zeus layer provides programmable signatures through Zeus Programming Library (ZPL)"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                            <StepContent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8">

                {/* 3rd row */}
                <div className="flex flex-col md:flex-row w-full md:w-3/4">
                    <div className="w-full md:w-1/2 flex items-center justify-center border-2 border-primary">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                        <StepContent 
                            title="Step 3"
                            tagline="Broadcast signed transactions to target blockchain"
                            description="Zeus Node relays signed proposed transactions to target blockchains"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                            <StepContent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8">

                {/* 4th row */}
                <div className="flex flex-col md:flex-row w-full md:w-3/4">
                    <div className="w-full md:w-1/2 flex items-center justify-center border-2 border-primary">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                        <StepContent 
                            title="Step 4"
                            tagline="Secure the cross-chain communication by fraud proofs"
                            description="When certain Zeus Nodes collude, honest one can secure the network by simply submitting fraud proofs to slash malicious ones"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="p-6 rounded-lg shadow-lg mx-4 mb-4">
                            <StepContent />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HowZeusWorks;