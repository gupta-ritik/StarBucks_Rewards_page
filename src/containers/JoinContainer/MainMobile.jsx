import React from 'react';
import MainMobileContent from '../../components/JoinComponents/MainMobileContent';

const MainMobile = () => {
    return(
        <div className='flex bg-mobile bg-light-green bg-cover bg-no-repeat md:hidden'>
            <div className="flex w-full">
                <div className='pb-[133.33%] float-left w-0'></div>
                <MainMobileContent />
            </div>
        </div>
    )
}

export default MainMobile