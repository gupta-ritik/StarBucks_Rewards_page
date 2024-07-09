import React from 'react';

const MenuOptions = () => {
    return (
        <div className='shrink-0'>
            <ul className='flex gap-x-[2.4rem] tracking-widest uppercase font-bold py-[4rem] text-sm'>
                <li>
                    <a href="/" className='hover:text-green'>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="/" className='hover:text-green'>
                        Rewards
                    </a>
                </li>
                <li>
                    <a href="/" className='hover:text-green'>
                        Gift Cards
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuOptions;