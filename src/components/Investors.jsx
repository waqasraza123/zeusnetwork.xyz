import React from 'react';
import InvestorCard from './InvestorCard';
import MuneebImageSrc from '../assets/images/investors/muneeb_ali.webp';
import AndrewImageSrc from '../assets/images/investors/andrew_kang.webp';
import AnatolyImageSrc from '../assets/images/investors/anatoly_yakovenko.webp';

const InvestorsSection = () => {
    return (
        <section className="investors bg-darkBlack text-primary text-center py-24" id="investors">
            <div className="investors-header">
                <h3 className="investors-header-title">
                    <span className="investors-header-title-highlight text-gradient-color-2 px-4 py-1">
                        Backed by Web3's Most Influential 
                        <span className="inline-block">
                            <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.025 5.62301C3.093 5.82701 3.285 5.96501 3.5 5.96501C3.715 5.96501 3.906 5.82701 3.975 5.62301L4.396 4.36001L5.659 3.93901C5.863 3.87101 6.001 3.68001 6.001 3.46501C6.001 3.25001 5.863 3.05901 5.659 2.99101L4.396 2.57001L3.975 1.30701C3.838 0.899007 3.163 0.899007 3.026 1.30701L2.605 2.57001L1.342 2.99101C1.138 3.05901 1 3.25001 1 3.46501C1 3.68001 1.138 3.87101 1.342 3.93901L2.605 4.36001L3.025 5.62301Z" fill="#C5C5CF"></path>
                                <path d="M16.525 8.80302L11.99 7.01002L10.197 2.47502C9.97002 1.90302 9.02902 1.90302 8.80202 2.47502L7.00902 7.01002L2.47402 8.80302C2.18802 8.91602 1.99902 9.19302 1.99902 9.50002C1.99902 9.80702 2.18702 10.084 2.47402 10.197L7.00902 11.99L8.80202 16.525C8.91502 16.811 9.19202 16.999 9.49902 16.999C9.80602 16.999 10.083 16.811 10.196 16.525L11.989 11.99L16.524 10.197C16.81 10.084 16.999 9.80702 16.999 9.50002C16.999 9.19302 16.812 8.91602 16.525 8.80302Z" fill="#C5C5CF"></path>
                            </svg>
                        </span>
                    </span>
                </h3>
                <div className="badge badge-primary text-primary mask-border text-7xl font-bold">
                    <span>Angel Investors</span>
                </div>
            </div>

            {/* cards */}
            <div className="investors-list flex justify-between items-center mt-8">
                <div className='flex-1'>
                    <InvestorCard logoSrc={AnatolyImageSrc} name={'Anatoly Yakovenko'} position={'Co-Founder'}  alt={'Anatoly Yakovenko Image'} />
                </div>
            
                <div className='flex-1'>
                    <InvestorCard logoSrc={MuneebImageSrc} name={'Muneeb Ali'} position={'Co-Founder'} alt={'Muneeb Ali Image'} />
                </div>

                <div className='flex-1'>
                    <InvestorCard logoSrc={AndrewImageSrc} name={'Andrew Kang'}  position={'Founder'} alt={'Andrew Kang Image'} />
                </div>
            </div>
        </section>
    );
};

export default InvestorsSection;