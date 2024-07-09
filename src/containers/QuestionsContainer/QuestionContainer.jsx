import React from 'react';
import WindowLogo from '../../Assets/Icons/WindowLogo';

const QuestionContainer = () => {
    return (
        <div className='text-left mb-[72px] md:mb-[128px]'>
            <div className='mx-auto py-[4.8rem] px-[1.6rem] max-w-[1440px] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:px-0'>
                <div>
                    <div className='md:w-[50%] md:ml-[16.67%]'>
                        <h2 className='font-semibold text-[2rem] leading-[1.385] pb-[1.6rem] min-[375px]:text-[2.4rem] md:text-[2.8rem]'>Questions?</h2>
                        <p className='pb-[1.6rem] text-[16px]'>We want to help in anyway we can. You can ask your barista anytime or we've answered the most commonly asked questions&nbsp; 
                            <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                                <span>right over here</span>
                                <WindowLogo />           
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;