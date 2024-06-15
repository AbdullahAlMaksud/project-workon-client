import { GrDashboard } from 'react-icons/gr';
import { NavLink, Outlet } from 'react-router-dom';
import { TbUsersGroup } from 'react-icons/tb';
import { MdOutlinePayments, MdOutlineWorkHistory } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from "react-icons/md";
import Sidebar from '../Pages/Dashboard/Sidebar';
import useAuth from '../hook/useAuth';
import { axiosNormal } from '../hook/useAxiosNormal';

const DashboardLayout = () => {
    const { user } = useAuth()
    const email = user.email;
    console.log(email)
    const [role, setRole] = useState();

    useEffect(() => {
        const userRole = async () => {
            try {
                const response = await axiosNormal.get(`/user/role`, {
                    params: { email }
                });
                setRole(response.data.role);
                // setError('');
            } catch (error) {
                setRole('');
                console.log(error)
                // setError(error.response ? error.response.data.message : error.message);
            }
        }
        userRole()
    }, [email])

    console.log(role)


    // const role = 'employee'
    // // const role = 'hr'
    // // const role = 'admin'

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const employeeMenu = <>
        <li className='text-white w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-800 rounded-full mx-2 py-1 w-full px-4 flex items-center gap-3` : `w-full px-4  py-1  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex mt-2'>
            <NavLink to={'work-sheet'} className={({ isActive }) => isActive ? `bg-red-900 rounded-full py-1 w-full px-4   flex items-center gap-3 mx-2` : `w-full px-4 py-1 mx-2 rounded-full hover:bg-red-800 flex items-center gap-3`}>
                <MdOutlineWorkHistory />
                <span>Work Sheet</span>
            </NavLink>
        </li>
        <li className='text-white w-full flex mt-2'>
            <NavLink to={'payment-history'} className={({ isActive }) => isActive ? `bg-red-900 rounded-full py-1 w-full px-4   flex items-center gap-3 mx-2` : `w-full px-4 py-1 mx-2 rounded-full hover:bg-red-800 flex items-center gap-3`}>
                <MdOutlinePayments />
                <span>Payment History</span>
            </NavLink>
        </li>
    </>

    const hrMenu = <>
        <li className='dark:text-white text-black w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-800 rounded-full mx-2 py-1 w-full px-10 flex items-center gap-3` : `w-full px-10 py-1  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='dark:text-white text-black w-full flex mt-2'>
            <NavLink to={'employee-list'} className={({ isActive }) => isActive ? `bg-red-500 rounded-b-xl py-1 w-full px-10  flex items-center gap-3 mx-2` : `w-full px-10 py-1 mx-2 rounded-b-lg hover:bg-red-400 flex items-center gap-3`}>
                <MdOutlineWorkHistory />
                <span>Employee List</span>
            </NavLink>
        </li>
        <li className='dark:text-white text-black w-full flex mt-2'>
            <NavLink to={`progress`} className={({ isActive }) => isActive ? `bg-red-500 rounded-b-xl py-1 w-full px-10  flex items-center gap-3 mx-2` : `w-full px-10 py-1 mx-2 rounded-b-lg hover:bg-red-400 flex items-center gap-3`}>
                <GiProgression />
                <span>Progress</span>
            </NavLink>
        </li>
    </>

    const adminMenu = <>
        <li className='dark:text-white text-black w-full flex'>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? `bg-red-800 rounded-full mx-2 py-1 w-full px-10 flex items-center gap-3` : `w-full px-10 py-1  flex items-center gap-3`}>
                <GrDashboard />
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li className='dark:text-white text-black w-full flex mt-2'>
            <NavLink to={'all-employee-list'} className={({ isActive }) => isActive ? `bg-red-500 rounded-b-xl py-1 w-full px-10  flex items-center gap-3 mx-2` : `w-full px-10 py-1 mx-2 rounded-b-lg hover:bg-red-400 flex items-center gap-3`}>
                <TbUsersGroup />
                <span>All Employee List</span>
            </NavLink>
        </li>
    </>

    return (
        <div className='bg-red-200 dark:bg-slate-950'>
            <section>
                <button onClick={handleOpen} className={isOpen ? 'px-1.5 py-1.5 rounded-full shadow-sm shadow-black/50 absolute z-10 bg-red-700 border-white border-2 outline-dashed outline-1  text-white top-16 mt-3.5 left-4 outline-white hover:shadow-none active:scale-95  duration-500 ease-out' : 'px-3 py-1 rounded-md shadow-sm shadow-black/50 absolute z-10 bg-red-700 border-white border-2 outline-dashed outline-1 outline-red-600 text-white top-20 left-3 hover:shadow-none active:scale-95  duration-500 ease-out animate-pulse'}>
                    {
                        isOpen ? <MdFormatIndentDecrease className='rotate-90 duration-500 ease-in-out text-sm' /> : <MdFormatIndentIncrease className='rotate-90 duration-500 ease-in-out' />
                    }


                </button>


                <div className='flex min-h-[calc(100vh-304px)]'>
                    <aside className={isOpen === true ? '-translate-y-0 -mt-16 flex duration-1000 ease-out ml-2 mb-5' : `-translate-y-[1000px] flex mt-16 duration-1000 ease-out`}>
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

                    <section className={isOpen === true ? 'ml-0 duration-700 ease-out w-full -mt-16 pt-16' : '-ml-48 duration-700 ease-out w-full'}>
                        <Outlet />
                    </section>
                </div>
            </section>
        </div>
    );
};

export default DashboardLayout;