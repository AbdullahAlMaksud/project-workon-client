import React from 'react';
import { GiSeatedMouse } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'} className='relative hover:bg-gray-300 text-black px-2 mb-1 py-1 rounded-lg active:scale-95'>
            <h1 className='text-3xl font-black w-fit  font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
            <GiSeatedMouse className='absolute -right-2 -top-1 text-white' />
        </Link>
    );
};

export default Logo;