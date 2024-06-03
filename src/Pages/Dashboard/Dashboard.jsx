import { GrDashboard } from 'react-icons/gr';
import Sidebar from './Sidebar';
import { NavLink, Outlet } from 'react-router-dom';
import { TbUsersGroup } from 'react-icons/tb';
import { MdOutlinePayments, MdOutlineWorkHistory } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
const Dashboard = () => {
    const role = 'employee'
    // const role = 'hr'
    // const role = 'admin'

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
        <div className='flex'>
            <aside className='hidden md:flex'>
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


            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default Dashboard;