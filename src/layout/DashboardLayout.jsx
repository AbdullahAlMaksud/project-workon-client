import { GrDashboard } from 'react-icons/gr';
import { NavLink, Outlet } from 'react-router-dom';
import { TbUsersGroup } from 'react-icons/tb';
import { MdOutlinePayments, MdOutlineWorkHistory } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { useState } from 'react';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from "react-icons/md";
import Sidebar from '../Pages/Dashboard/Sidebar';

const DashboardLayout = () => {

    const role = 'employee'
    // const role = 'hr'
    // const role = 'admin'

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const employeeMenu = <>
        <li className='text-white w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-black py-2 w-full px-10 flex items-center gap-3` : `w-full px-10 py-2  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex'>
            <NavLink to={'work-sheet'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10  flex items-center gap-3` : `w-full px-10 py-2 hover:bg-red-800  flex items-center gap-3`}>
                <MdOutlineWorkHistory />
                <span>Work Sheet</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex'>
            <NavLink to={'payment-history'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10  flex items-center gap-3` : `w-full px-10 py-2 hover:bg-red-800  flex items-center gap-3`}>
                <MdOutlinePayments />
                <span>Payment History</span>
            </NavLink>
        </li>
    </>

    const hrMenu = <>
        <li className='text-white w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10 flex items-center gap-3` : `w-full px-10 py-2  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex'>
            <NavLink to={'employee-list'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10  flex items-center gap-3` : `w-full px-10 py-2 hover:bg-red-800  flex items-center gap-3`}>
                <MdOutlineWorkHistory />
                <span>Employee List</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex'>
            <NavLink to={`progress`} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10  flex items-center gap-3` : `w-full px-10 py-2 hover:bg-red-800  flex items-center gap-3`}>
                <GiProgression />
                <span>Progress</span>
            </NavLink>
        </li>
    </>

    const adminMenu = <>
        <li className='text-white w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10 flex items-center gap-3` : `w-full px-10 py-2  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex'>
            <NavLink to={'all-employee-list'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10  flex items-center gap-3` : `w-full px-10 py-2 hover:bg-red-800  flex items-center gap-3`}>
                <TbUsersGroup />
                <span>All Employee List</span>
            </NavLink>
        </li>
    </>

    return (
        <>
            <button onClick={handleOpen} className={isOpen ? 'md:hidden px-2 py-2 rounded-full translate-x-44 shadow-sm shadow-black/50 absolute z-10 bg-red-800 border-white border-2 outline-dashed scale-75 outline-2 outline-red-400 text-white top-1 left-1 hover:shadow-none active:scale-70 duration-300 ease-out' : 'md:hidden px-3 py-1 rounded-md shadow-sm shadow-black/50 absolute z-10 bg-red-700 border-white border-2 outline-dashed outline-1 outline-red-600 text-white top-2 left-2 hover:shadow-none active:scale-95  duration-300 ease-out'}>
                {
                    isOpen ? <MdFormatIndentDecrease className="duration-500 ease-in text-xl" /> : <MdFormatIndentIncrease className="duration-500 ease-in" />
                }


            </button>
            <div className='flex'>
                <aside className={isOpen === true ? 'translate-x-0 md:flex duration-300 ease-out' : `-translate-x-60 md:translate-x-0 md:flex duration-300 ease-out`}>
                    {
                        role === 'employee' && <Sidebar mainMenu={employeeMenu} />
                    }
                    {
                        role === 'hr' && <Sidebar mainMenu={hrMenu} />
                    }
                    {
                        role === 'admin' && <Sidebar mainMenu={adminMenu} />
                    }
                </aside>

                <section className={isOpen === true ? 'duration-700 ease-out my-10' : '-ml-56 md:ml-0 duration-700 ease-out my-10'}>
                    <Outlet />
                </section>
            </div>
        </>
    );
};

export default DashboardLayout;