import React from 'react';
import WindowLogo from '../../Assets/Icons/WindowLogo';

const TermsOfUse = () => {
    return (
        <div className='inline-block m-0 relative text-left align-top w-full pb-[3.2rem] md:w-[50%] md:pl-[3.2rem]'>
            <h2 className='text-[#00000094] pb-[1.6rem] text-[1.3rem] font-bold uppercase tracking-widest md:text-[1.4rem]'>Terms Of Use</h2>
            <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>For full program details visit&nbsp; 
                <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                    <span>starbucks.com/rewards/terms</span>
                    <WindowLogo />           
                </a>
            </p>
            <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
            <p className='text-[1.3rem] pb-[1.6rem] md:text-[1.4rem]'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the&nbsp; 
                <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                    <span>Starbucks Store Locator</span>
                    <WindowLogo />           
                </a>
            and search for locations honoring “Redeem Rewards”.</p>
            <p className='text-[1.3rem] md:text-[1.4rem]'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
        </div>
    )
};

export default TermsOfUse;