import React from 'react';
import Restrictions from '../../components/StarTermsComponents/Restrictions';
import EarningStars from '../../components/StarTermsComponents/EarningStars';
import Benefits from '../../components/StarTermsComponents/Benefits';
import TermsOfUse from '../../components/StarTermsComponents/TermsOfUse';
import ReedemingRewards from '../../components/StarTermsComponents/RedeemingRewards';

const StarTermsContainer = () => {
    return (
        <div className='mb-[4.8rem]'>
            <div className='bg-[#f9f9f9]'>
                <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] max-w-[1440px] min-[1520px]:px-0'>
                    <div>
                        <div className='py-[3.2rem] md:py-[4.8rem] max-w-[1440px] mx-auto block text-left'>
                            <Restrictions />
                            <EarningStars />
                            <TermsOfUse />
                            <Benefits />
                            <ReedemingRewards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StarTermsContainer;