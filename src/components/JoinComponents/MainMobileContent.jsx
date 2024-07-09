import React from 'react';
import JoinButton from '../Header/JoinButton';

const MainMobileContent = () => {
    return (
        <div className='flex items-start justify-center w-full'>
            <div className='text-center py-[3.2rem] px-[1.6rem] max-w-[400px] my-0 mx-auto'>
                <h2 className='text-[2.2rem] leading-tight min-[375px]:text-[2.8rem] font-semibold'>FREE COFFEE <br /> IS A TAP AWAY </h2>
                <div className='pt-[1.6rem] text-[1.6rem]'>
                    <p>Join now to start earning Rewards.</p>
                </div>
                <div className='pt-[3.2rem]'>
                    <JoinButton innerText={"Join in the app"} bgColor={"#008248"} borColor={"#008248"}/>
                    <div className='mt-[1.6rem] text-[1.6rem]'>
                        <a href="https://www.starbucks.com/account/create" className='bg-transparent underline'>Or join online</a>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default MainMobileContent