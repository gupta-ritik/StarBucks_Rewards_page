import React from 'react';
import JoinButton from '../Header/JoinButton';

const MainDesktopContent = () => {
    return (
        <div className='flex items-center justify-start w-full'>
            <div className='text-left py-[3.2rem] px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:px-0 max-w-[400px] my-0 md:min-w-[48%] md:m-initial'>
                <h2 className='text-[2.2rem] leading-tight min-[375px]:text-[2.8rem] md:text-[3.6rem] font-semibold'>FREE COFFEE <br /> IS A TAP AWAY </h2>
                <div>
                    <p className='text-[1.6rem] md:text-[1.9rem] mt-[1.6rem]'>Join now to start earning Rewards.</p>
                    <div className='buttonContainer mt-[3.2rem]'>
                        <JoinButton innerText={"Join now"} bgColor={"#008248"} borColor={"#008248"}/>   
                    </div>
                    <div className='text-[1.6rem] md:text-[1.9rem] mt-[1.6rem]'>
                        <p>Or&nbsp;
                            <a href='/' className='underline hover:no-underline'>join the app</a>
                        &nbsp;for the best experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDesktopContent;