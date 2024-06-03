import { GrDashboard } from 'react-icons/gr';
import Sidebar from './Sidebar';
import { NavLink, Outlet } from 'react-router-dom';
import { TbUsersGroup } from 'react-icons/tb';
import { MdOutlinePayments, MdOutlineWorkHistory } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { useState } from 'react';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from "react-icons/md";


const Dashboard = () => {
    const role = 'employee'
    // const role = 'hr'
    // const role = 'admin'

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const employeeMenu = <>
        <li className='text-white w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-950 py-2 w-full px-10 flex items-center gap-3` : `w-full px-10 py-2  flex items-center gap-3`}>
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
            <button onClick={handleOpen} className={isOpen ? 'md:hidden px-3 py-1 rounded-sm absolute z-10 text-white' : 'md:hidden px-3 py-1 rounded-sm absolute z-10 border-red-700 border border-t-0 border-l-0 text-red-800'}>
                {
                    isOpen ? <MdFormatIndentDecrease className="duration-500 ease-in" /> : <MdFormatIndentIncrease className="duration-500 ease-in" />
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

export default Dashboard;