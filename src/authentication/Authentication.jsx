import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Authentication = () => {


    return (
        <div className='container w-11/12 mx-auto my-10'>
            <Helmet>
                <title>Workon | Authentication</title>
            </Helmet>
            <div className='flex items-center justify-center'>
                <div className='w-full flex flex-col items-center'>
                    <div className={'bg-gray-300 lg:w-fit px-2 py-2 rounded-full flex gap-2'}>
                        <NavLink to={'/authentication/login'} className={({ isActive }) => isActive ? "bg-red-500 text-white rounded-full px-4 py-1" : "rounded-full px-4 py-1"}>Sign In</NavLink>
                        <NavLink to={'/authentication/signup'} className={({ isActive }) => isActive ? "bg-red-500 text-white rounded-full px-4 py-1" : "rounded-full px-4 py-1"}>Sign Up</NavLink>
                    </div>

                    <div className={'w-full mt-10'}>
                        <Outlet />
                    </div>

                </div>



            </div>
        </div >
    );
};

export default Authentication;