import { GiSeatedMouse } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { BiCross, BiMenu, BiUser } from 'react-icons/bi';
import { useEffect, useRef, useState } from "react";
import DarkMode from "../utilities/DarkMode";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dropRef = useRef(null);
    const [user, setUser] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    const handleClickOutside = (e) => {
        if (dropRef.current && !dropRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navmenu = <ul className='flex gap-5 font-raleway justify-center items-center'>
        <li>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'border-b-2 border-red-700 font-medium dark:text-white' : 'dark:text-white hover:border-b-2 hover:border-red-300'}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'border-b-2 border-red-700 font-medium dark:text-white' : 'dark:text-white hover:border-b-2 hover:border-red-300'}>Contact us</NavLink>
        </li>

        <li><DarkMode /></li>
    </ul>

    return (
        <div className="relative z-10">
            <nav className='fixed shadow-sm w-full dark:bg-slate-800/50 bg-slate-50/60 backdrop-blur-md min-h-16 flex items-center justify-center'>
                <section className='w-11/12 container mx-auto'>
                    <div className='w-full flex justify-between md:grid md:grid-cols-3'>
                        <Link to={'/'} className='col-span-1 w-fit relative hover:bg-gray-300 px-2 py-1 rounded-lg active:scale-95'>
                            <h1 className='text-3xl font-black w-fit  font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                            <GiSeatedMouse className='absolute -right-2 -top-1 text-red-800' />
                        </Link>
                        <div className='hidden col-span-2 md:flex justify-end items-center gap-7'>

                            {
                                navmenu
                            }

                            <div>
                                <Link to={'/authentication'}><button className='bg-red-700 text-white font-poppins px-8 py-2 rounded-md text-sm hover:bg-red-800 active:scale-95'>Login</button></Link>
                            </div>
                        </div>
                        <div onClick={handleDropdown} className='md:hidden flex items-center justify-end hover:cursor-pointer'>
                            {
                                isOpen ? <BiCross className='text-4xl hover:bg-slate-100 hover:shadow-inner rounded-md p-1'></BiCross> : <BiMenu className='text-4xl hover:bg-slate-100 hover:shadow-inner rounded-md p-1' />
                            }
                        </div>
                    </div>

                </section>
                {isOpen && (
                    <div
                        ref={dropRef}
                        className="absolute md:hidden top-14 right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-b-md shadow-xl dark:bg-gray-800 transition ease-out duration-1000 transform opacity-100 scale-100"
                    >
                        <div className="flex justify-end">
                            <DarkMode />
                        </div>
                        {
                            user ? <NavLink
                                to={'/myprofile'}
                                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                view profile
                            </NavLink> :
                                <NavLink
                                    to={'/authentication'}
                                    className="px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white flex items-end gap-3"
                                >
                                    <BiUser className="p-0.5 text-xl" /> <span>Sign In</span>
                                </NavLink>
                        }
                        <hr className="border-gray-200 dark:border-gray-700" />
                        <NavLink
                            to={'/dashboard'}
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Dashboard
                        </NavLink>
                        <hr className="border-gray-200 dark:border-gray-700" />
                        <NavLink
                            to={'/contact'}
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            href="#"
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Sign Out
                        </NavLink>
                    </div>
                )}
            </nav>

        </div>
    );
};

export default Navbar;