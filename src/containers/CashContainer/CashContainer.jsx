import React from 'react';
import CashTitle from '../../components/CashComponents/CashTitle';
import CashBodyOne from '../../components/CashComponents/CashBodyOne';
import CashBodyTwo from '../../components/CashComponents/CashBodyTwo';

const CashContainer = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className="bg-cream">
                <div className='mx-auto py-[4.8rem] px-[1.6rem] max-w-[1440px] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:px-0'>
                    <div>
                        <CashTitle />
                        <CashBodyOne />
                        <hr className='mb-[4.8rem] mt-[2.4rem]'/>
                        <CashBodyTwo />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CashContainer;