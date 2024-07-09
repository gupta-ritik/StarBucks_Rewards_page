import React from 'react';
import StarCodesForm from '../../components/StarCodesComponents/StarCodesForm';
import StarCodesTitle from '../../components/StarCodesComponents/StarCodesTitle';

const StarCodesContainer = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] max-w-[1440px] min-[1520px]:px-0'>
                <div>
                    <div className='md:ml-[16.667%] md:w-[50%] text-left'>
                        <div>
                            <StarCodesTitle />
                            <StarCodesForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StarCodesContainer;