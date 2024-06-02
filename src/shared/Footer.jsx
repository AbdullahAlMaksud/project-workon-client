import React from 'react';
import { GiSeatedMouse } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='h-60 bg-black pt-10 flex flex-col'>
            <div className='w-11/12 container mx-auto flex flex-col md:flex-row items-center md:items-end md:justify-end md:pb-5'>

                <div className='flex flex-col items-center md:items-start border-b pb-3 md:border-0 w-10/12'>
                    <Link to={'/'} className='col-span-1 w-fit relative hover:bg-gray-900 text-white px-2 mb-1 py-1 rounded-lg active:scale-95'>
                        <h1 className='text-3xl font-black w-fit  font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                        <GiSeatedMouse className='absolute -right-2 -top-1 text-white' />
                    </Link>
                    <p className='text-white font-poppins text-sm'>51, West Tejturi Bazar, Dhaka-1216</p>
                </div>

                <div className='text-white py-3  md:w-full w-10/12 flex justify-center md:justify-end items-center md:items-end'>

                    <ul className='flex gap-3'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-white flex-1 border-t container mx-auto w-11/12 items-center md:items-start md:pt-6 lg:items-center justify-center flex border-dashed'>
                <h2 className='text-sm font-thin font-poppins'>All Rights Reserved.</h2>
            </div>
        </footer>
    );
};

export default Footer;