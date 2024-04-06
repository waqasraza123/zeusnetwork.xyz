import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import StepContent from './StepContent';
import '../assets/css/howZeusWorks.css';
import { motion } from 'framer-motion';

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
                    {/* row 1 div 2 */}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        {/* row 1 div 2 content*/}
                        <div className="p-6 rounded-full shadow-lg mx-4 mb-4 h-full w-full">
                            <div className="rounded-lg border border-gray-300 flex-grow h-full">
                                <div className="p-4">
                                    <button className="rounded-full flex items-center border border-primary px-2 py-1 animate-pulse">
                                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 13.5C1.558 13.5 1.366 13.427 1.22 13.28C0.927 12.987 0.927 12.512 1.22 12.219L6.116 7.323C6.603 6.836 7.396 6.836 7.884 7.323L11 10.439L15.72 5.719C16.013 5.426 16.488 5.426 16.781 5.719C17.074 6.012 17.074 6.487 16.781 6.78L11.885 11.676C11.398 12.163 10.605 12.163 10.117 11.676L7.001 8.56L2.28 13.28C2.134 13.426 1.942 13.5 1.75 13.5Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="text-xs font-medium">Scalibility</span>
                                    </button>


                                    <div className="text-sm mt-2">Unmatched scalability grows with the network</div>
                                    <svg className="w-full h-64" viewBox="0 0 548 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.3406 241.223C387.322 262.751 149.05 6.81986 528.997 29.5415" stroke="#B283FF" strokeWidth="1.5"></path>
                                        <path d="M23.6468 302.988C455.999 328.843 202.205 70.7319 524.13 89.9837" stroke="#B283FF" strokeWidth="1.5"></path>
                                        <path d="M18.9998 273.923C409.182 297.256 174.333 42.4312 528.65 63.6201" stroke="#CBAAFF" strokeWidth="3"></path>
                                        <rect x="529.195" y="55" width="12.0675" height="12.0675" transform="rotate(49.6378 529.195 55)" fill="#CBAAFF"></rect>
                                        <rect x="524.47" y="86.5" width="5.20759" height="5.20759" transform="rotate(49.6378 524.47 86.5)" fill="#B283FF"></rect>
                                        <rect x="529.25" y="26" width="5.20759" height="5.20759" transform="rotate(49.6378 529.25 26)" fill="#B283FF"></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd row */}
            <div className="flex flex-col items-center justify-center mt-8">
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
                        <div className="p-6 rounded-full shadow-lg mx-4 mb-4 h-full w-full">
                            <div className="rounded-lg border border-gray-300 flex-grow h-full">
                                <div className="p-4">
                                    <button className="rounded-full flex items-center border border-primary px-2 py-1 animate-pulse">
                                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 13.5C1.558 13.5 1.366 13.427 1.22 13.28C0.927 12.987 0.927 12.512 1.22 12.219L6.116 7.323C6.603 6.836 7.396 6.836 7.884 7.323L11 10.439L15.72 5.719C16.013 5.426 16.488 5.426 16.781 5.719C17.074 6.012 17.074 6.487 16.781 6.78L11.885 11.676C11.398 12.163 10.605 12.163 10.117 11.676L7.001 8.56L2.28 13.28C2.134 13.426 1.942 13.5 1.75 13.5Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="text-xs font-medium">Speed</span>
                                    </button>

                                    <div className="text-sm mt-2"> Instant transactions with a throughput of over 60,000 tps </div>
                                    <svg className='w-full h-64' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" stroke="#FFBF83" fill="#FFBF83" shapeRendering="geometricPrecision" />
                                        <path d="M50 20 L50 80 M20 50 L80 50 M29.8 29.8 L70.2 70.2 M29.8 70.2 L70.2 29.8" stroke="#FFFFFF" strokeWidth="3" shapeRendering="geometricPrecision" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd row */}
            <div className="flex flex-col items-center justify-center mt-8">
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
                        <div className="p-6 rounded-full shadow-lg mx-4 mb-4 h-full w-full">
                            <div className="rounded-lg border border-gray-300 flex-grow h-full">
                                <div className="p-4">
                                    <button className="rounded-full flex items-center border border-primary px-2 py-1 animate-pulse">
                                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 13.5C1.558 13.5 1.366 13.427 1.22 13.28C0.927 12.987 0.927 12.512 1.22 12.219L6.116 7.323C6.603 6.836 7.396 6.836 7.884 7.323L11 10.439L15.72 5.719C16.013 5.426 16.488 5.426 16.781 5.719C17.074 6.012 17.074 6.487 16.781 6.78L11.885 11.676C11.398 12.163 10.605 12.163 10.117 11.676L7.001 8.56L2.28 13.28C2.134 13.426 1.942 13.5 1.75 13.5Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="text-xs font-medium">Liquidity</span>
                                    </button>

                                    <div className="text-sm mt-2"> Unlimited liquidity always at your fingertips </div>
                                    <svg className='w-full h-64' viewBox="0 0 454 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 42.1726L30.563 44.8669C42.1261 47.4604 65.1848 53 88.4457 50.2302C111.471 47.4604 134.63 36.8848 157.554 26.0573C180.815 15.2298 199.576 13.1572 222.5 19.7795C245.66 26.5026 273.185 42.1726 296.446 52.9245C319.504 63.5757 342.63 61.0577 365.891 52.9245C388.849 44.9424 412.076 31.3451 435 28.7516" stroke="#FFBF83" shapeRendering="geometricPrecision"></path>
                                        <path d="M19 175.173L30.563 177.867C42.1261 180.46 65.1848 186 88.4457 183.23C111.471 180.46 134.63 169.885 157.554 159.057C180.815 148.23 199.576 146.157 222.5 152.78C245.66 159.503 273.185 175.173 296.446 185.924C319.504 196.576 342.63 194.058 365.891 185.924C388.849 177.942 412.076 164.345 435 161.752" stroke="#FFBF83" shapeRendering="geometricPrecision"></path>
                                        <path d="M19 86.47L30.563 89.1949C42.1261 91.8179 65.1848 97.4205 88.4457 94.6192C111.471 91.8179 134.63 81.1221 157.554 70.1716C180.815 59.2211 199.576 57.1249 222.5 63.8225C245.66 70.622 273.185 86.47 296.446 97.3441C319.504 108.116 342.63 105.57 365.891 97.3441C388.849 89.2713 412.076 75.5195 435 72.8965M19 130.97L30.563 133.695C42.1261 136.318 65.1848 141.92 88.4457 139.119C111.471 136.318 134.63 125.622 157.554 114.672C180.815 103.721 199.576 101.625 222.5 108.322C245.66 115.122 273.185 130.97 296.446 141.844C319.504 152.616 342.63 150.07 365.891 141.844C388.849 133.771 412.076 120.019 435 117.396" stroke="#FFBF83" shapeRendering="geometricPrecision"></path>
                                        <path d="M88.4457 94.6192C65.1848 97.4205 42.1261 91.8179 30.563 89.1949L19 86.1349V130.97L30.563 133.695C42.1261 136.318 65.1848 141.92 88.4457 139.119C111.471 136.318 134.63 125.622 157.554 114.672C180.815 103.721 199.576 101.625 222.5 108.322C245.66 115.122 273.185 130.97 296.446 141.844C319.504 152.616 342.63 150.07 365.891 141.844C388.849 133.771 412.076 120.019 435 117.396V72.8965C412.076 75.5195 388.849 89.2713 365.891 97.3441C342.63 105.57 319.504 108.116 296.446 97.3441C273.185 86.47 245.66 70.622 222.5 63.8225C199.576 57.1249 180.815 59.2211 157.554 70.1716C134.63 81.1221 111.471 91.8179 88.4457 94.6192Z" fill="#FFBF83" fillOpacity="0.04" shapeRendering="geometricPrecision"></path>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th row */}
            <div className="flex flex-col items-center justify-center mt-8">
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
                        <div className="p-6 rounded-full shadow-lg mx-4 mb-4 h-full w-full">
                            <div className="rounded-lg border border-gray-300 flex-grow h-full">
                                <div className="p-4">
                                    <button className="rounded-full flex items-center border border-primary px-2 py-1 animate-pulse">
                                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 13.5C1.558 13.5 1.366 13.427 1.22 13.28C0.927 12.987 0.927 12.512 1.22 12.219L6.116 7.323C6.603 6.836 7.396 6.836 7.884 7.323L11 10.439L15.72 5.719C16.013 5.426 16.488 5.426 16.781 5.719C17.074 6.012 17.074 6.487 16.781 6.78L11.885 11.676C11.398 12.163 10.605 12.163 10.117 11.676L7.001 8.56L2.28 13.28C2.134 13.426 1.942 13.5 1.75 13.5Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="text-xs font-medium">Security</span>
                                    </button>


                                    <div className="text-sm mt-2"> Bitcoin's trade record of robust security dates over a decade </div>
                                    <svg className='w-full h-64' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" stroke="#FFBF83" fill="#FFBF83" shapeRendering="geometricPrecision" />
                                        <path d="M50 30 L70 50 L50 70 L30 50 Z" stroke="#FFFFFF" fill="#FFFFFF" shapeRendering="geometricPrecision" />
                                        <circle cx="50" cy="50" r="20" stroke="#FFFFFF" fill="none" strokeWidth="2" shapeRendering="geometricPrecision" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HowZeusWorks;