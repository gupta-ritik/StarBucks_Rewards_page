import React from 'react';

const CashBodyTwo = () => {
    return (
        <div className='TwoDollar block m-0 p-0 text-[16px] text-left'>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full lg:p-0 lg:w-[16.667%]'>
                <p className='font-semibold text-[1.9rem] md:text-[2.4rem]'>2 <span aria-hidden="true" className="text-black text-sm">★</span> per dollar</p>
                <p>Add funds in the app</p>
            </div>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="Preload" className='max-w-full h-auto fading' width={112}/>
                    </div>
                    <div className='text-left min-w-[calc(100%-128px)]'>
                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Preload</h3>
                        <p className='pt-[1.6rem]'>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                    </div>
                </div>
            </div>
            <div className='inline-block m-0 pb-[3.2rem] relative text-left align-top w-full md:p-0 md:w-[50%] lg:w-[41.667%] xl:w-[33.33%]'>
                <div className='flex md:pr-[0.8rem] lg:px-[2.4rem]'>
                    <div className='text-center shrink-0 m-0 pr-[1.6rem] max-w-[128px]'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="Register your gift card" className='max-w-full h-auto fading' width={112} />
                    </div>
                    <div className='text-left min-w-[calc(100%-128px)]'>
                        <h3 className='text-[1.6rem] font-semibold md:text-[1.9rem]'>Register your gift card</h3>
                        <p className='pt-[1.6rem]'>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashBodyTwo;