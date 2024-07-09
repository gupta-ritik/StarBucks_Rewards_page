import React from 'react';

const FavProduct = ({link, title, description}) => {
    return (
        <div className='w-full'>
            <div style={{boxShadow: "inset 0 7px 9px -7px rgb(0 0 0 / 14%)"}} className="justify-center items-center md:py-[3.2rem] md:flex">
                <div className='grow py-[3.2rem] md:mr-[4.8rem] md:py-0 md:max-w-[375px]'>
                    <div className='relative'>
                        <div className='block w-full pb-[52.25%]'></div>
                        <div className='absolute top-0 bottom-0 left-0 right-0'>
                            <img src={link} alt="" className='h-auto max-w-full w-full fading' />
                        </div>
                    </div>
                </div>
                <div className='grow px-[1.6rem] md:max-w-[375px]'>
                    <h3 className='pb-[1.6rem] text-[1.9rem] font-semibold text-center md:text-[2.4rem] md:text-left' tabIndex={-1}>{title}</h3>
                    <p className='text-center md:text-left'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FavProduct