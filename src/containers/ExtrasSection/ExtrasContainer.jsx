import React from 'react';
import ExtrasBody from '../../components/ExtrasSection/ExtrasBody';
import ExtrasTitle from '../../components/ExtrasSection/ExtrasTitle';

const ExtrasContainer = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
           <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:max-w-[1440px] min-[1520px]:px-0'>
                <div>
                    <ExtrasTitle />
                    <ExtrasBody />
                </div>
           </div>
        </div>
    )
}

export default ExtrasContainer;