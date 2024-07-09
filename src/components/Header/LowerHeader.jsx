import React from 'react';
import JoinButton from './JoinButton';
import "../../styles/lowerHeader.css"

const LowerHeader = () => {
    return (
        <div className='lowerHeader bg-dark-green w-full h-[50px] sticky top-[-1px] z-[1]'>
            <div className='flex items-center justify-between h-full px-[1.6rem] md:px-[2.4rem] md:pl-[99px] lg:px-[4rem] lg:pl-[131px] min-[1520px]:mx-auto min-[1520px]:max-w-[1440px] min-[1520px]:px-0  min-[1600px]:pl-0'>
                <h1 className='text-left tracking-widest uppercase font-bold text-white text-[1.3rem] md:text-[1.4rem]'>Starbucks® Rewards</h1>
                <div className='md:hidden shrink-0 whitespace-nowrap'>
                    <JoinButton innerText={"Join in the app"} bgColor={"transparent"} borColor={"white"}/>
                </div>
            </div>
        </div>
    )
}

export default LowerHeader