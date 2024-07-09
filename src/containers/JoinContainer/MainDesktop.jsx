import React from 'react';
import MainDesktopContent from '../../components/JoinComponents/MainDesktopContent';

const MainDesktop = () => {
    return (
        <div className='bg-desktop bg-light-green md:bg-[50%] bg-cover md:bg-[length:auto_100%] bg-no-repeat w-full flex text-left max-[767px]:hidden'>
            <div className='mx-auto px-0 w-full md:px-[2.4rem] lg:px-[4rem] box-content max-w-[1440px]'>
                <div className='flex box-border'>
                    <div className='pb-[56.25%] float-left w-0'></div>
                    <MainDesktopContent />
                </div>
            </div>
        </div>
    )
}

export default MainDesktop;