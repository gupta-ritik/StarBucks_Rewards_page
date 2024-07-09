import React from 'react';

const FooterLink = ({link, content}) => {
    return <a href={link} className="text-[#00000094] hover:text-[#000000de] text-[1.6rem] decoration-none py-[0.8rem] mb-[0.8rem] block bg-transparent">{content}</a>
}

export default FooterLink