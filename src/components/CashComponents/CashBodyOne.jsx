import React from 'react';

const CashBodyOne = () => {
    return (
        <div className='OneDollar block m-0 p-0 text-[16px] text-left'>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full lg:p-0 lg:w-[16.667%]'>
                <p className='font-semibold text-[1.9rem] md:text-[2.4rem]'>1 <span aria-hidden="true" className="text-black text-sm">★</span> per dollar</p>
                <p>Pay as you go</p>
            </div>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="Scan and pay separately" className='max-w-full h-auto fading' width={112}/>
                    </div>
                    <div className='text-left min-w-[calc(100%-128px)]'> 
                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Scan and pay separately</h3>
                        <p className='pt-[1.6rem]'>Use cash or credit/debit card at the register.</p>
                    </div>
                </div>
            </div>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="Save payment in the app" className='max-w-full h-auto fading' width={112} />
                    </div>
                    <div className='text-left min-w-[calc(100%-128px)]'>
                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Save payment in the app</h3>
                        <p className='pt-[1.6rem]'>Check-out faster by saving a credit/debit card or PayPal to your account. You&#8217;ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashBodyOne;