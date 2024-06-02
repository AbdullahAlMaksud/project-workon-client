import logo from '../../public/logo.svg'
import { HiCursorArrowRipple } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { GiSeatedMouse } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {

    const navmenu = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-red-700 font-medium' : 'hover:border-b-2 hover:border-red-300'} to={'/'}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink className={'hover:border-b-2 hover:border-red-300'} to={'/contact'}>Contact us</NavLink>
        </li>
    </>
    return (
        <nav className='fixed shadow-md w-full bg-transparent backdrop-blur-md min-h-16 flex items-center'>
            <section className='w-11/12 container mx-auto'>

                <div className='w-full grid grid-cols-2 md:grid-cols-3'>

                    <Link to={'/'} className='col-span-1 w-fit relative hover:bg-gray-300 px-2 py-1 rounded-lg active:scale-95'>
                        <h1 className='text-3xl font-black w-fit  font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                        <GiSeatedMouse className='absolute -right-2 -top-1 text-red-800' />
                    </Link>


                    <div className='col-span-2 flex justify-end items-center gap-7'>
                        <ul className='flex gap-5 font-raleway'>
                            {
                                navmenu
                            }
                        </ul>

                        <div>
                            <Link to={'/login'}><button className='bg-red-700 text-white font-poppins px-8 py-2 rounded-md text-sm hover:bg-red-800 active:scale-95'>Login</button></Link>
                        </div>
                    </div>

                </div>

            </section>
        </nav>
    );
};

export default Navbar;