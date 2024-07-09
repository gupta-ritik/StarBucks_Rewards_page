import React from 'react'

const MenuItem = ({link, innerText}) => {
  return <a href={link} className="text-left block py-[1.6rem] px-[3.2rem] w-full text-[1.9rem] no-underline">{innerText}</a>
}

export default MenuItem