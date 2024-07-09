import React from 'react';

const StartedBody = () => {
    return (
        <div className='flex flex-col pt-[48px] md:flex-row md:my-0 md:mx-[5vw]'>
            <div className='step1-mobile md:hidden flex md:flex-col pb-[3.2rem] w-[full] md:pb-0 md:mr-[2.4rem] md:w-[33.33%]'>
                <div className='img-container text-center shrink-0 pb-[2.4rem] max-w-[128px] my-0 pr-[1.6rem]'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="step one to get started on Starbucks Rewards" className='w-[48px]'/>
                </div>
                <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                    <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Download the Starbucks® app</h3>
                    <p className='text-[16px] pt-[1.6rem]' ><a href='/' className='text-green underline hover:no-underline'>Join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>    
                </div> 
            </div>
            <div className='step1 hidden md:flex md:flex-col pb-[3.2rem] w-[full] md:pb-0 md:mr-[2.4rem] md:w-[33.33%]'>
                <div className='img-container text-center shrink-0 pb-[2.4rem] max-w-[128px] my-0 mx-auto pr-[1.6rem] md:px-0'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="step one to get started on Starbucks Rewards" className='w-[48px]'/>
                </div>
                <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                    <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Create an account</h3>
                    <p className='text-[16px] pt-[1.6rem]' >To get started, <a href='/' className='text-green underline hover:no-underline'>join now</a>. You can also <a href='/' className='text-green underline hover:no-underline'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>    
                </div> 
            </div>
            <div className="step2 flex md:flex-col pb-[3.2rem] w-full md:pb-0 md:mx-[2.4rem] md:w-[33.33%]">
                <div className='img-container text-center shrink-0 pb-[2.4rem] max-w-[128px] my-0 mx-auto pr-[1.6rem] md:px-0'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="step two to get started on Starbucks Rewards" className='w-[48px]' />
                </div>
                <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                    <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Order and pay how you'd like</h3>
                    <p className='text-[16px] pt-[1.6rem]'>Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. <a href="/" className='text-green underline hover:no-underline'>Learn how</a></p>
                </div>
            </div>
            <div className='step3 flex pb-0 w-full md:ml-[2.4rem] md:flex-col md:w-[33.33%]'>
                <div className='img-container text-center shrink-0 pb-[2.4rem] max-w-[128px] my-0 mx-auto pr-[1.6rem] md:px-0'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="step two to get started on Starbucks Rewards" className='w-[48px]' />
                </div>
                <div className='text-container text-left md:text-center min-w-[calc(100%-128px)]'>
                    <h3 className='text-[1.6rem] md:text-[1.9rem] font-semibold'>Earn Stars, get Rewards</h3>
                    <p className='text-[16px] pt-[1.6rem]'>As you earn Stars, you can redeem them for Rewards &#8212; like free food, drinks and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>
        </div>
    )
};

export default StartedBody;