import React from 'react';

const FooterLinkBottom = ({link, content}) => {
    return (
        <li className="text-[1.4rem] items-center lg:flex lg:text-center">
            <span aria-hidden="true" className='text-[#00000094] px-[0.8rem] hidden lg:inline'>|</span>
            <a href={link} className="block no-underline hover:underline lg:px-[1.6rem] py-[0.8rem] lg:py-0 mb-[0.4rem] lg:mb-0">{content}</a>
        </li>
    )
};

export default FooterLinkBottom