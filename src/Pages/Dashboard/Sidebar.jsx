import { TbSmartHome } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../../hook/useAuth";

const Sidebar = ({ mainMenu }) => {

    const { user, logOut } = useAuth();
    console.log(user)

    return (
        <div className=' bg-red-700 rounded-b-xl shadow-black/70 dark:shadow-gray-800 shadow-xl dark:shadow-md min-w-48 pt-16'>
            {/* <div className="flex justify-center pt-10">
                <Link to={'/'} className='relative bg-gray-200 text-black px-4  h-12 flex items-center rounded-md active:scale-95'>
                    <h1 className='text-3xl font-black w-fit font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                    <GiSeatedMouse className='absolute -right-0 -top-0 text-black' />
                </Link>
            </div> */}

            <div className="py-4 flex flex-col justify-between h-full">
                <div className="text-sm">
                    <ul>
                        {
                            mainMenu
                        }
                    </ul>
                </div>

                <div className="flex flex-col items-start text-white text-sm">
                    <Link to={'/'} className="flex items-center gap-3 py-1 px-6 hover:bg-gray-800/10 w-full">
                        <TbSmartHome />
                        Home
                    </Link>
                    <button onClick={logOut} className="flex items-center gap-3 py-1 px-6 hover:bg-gray-800/10 w-full">
                        <VscSignOut />
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

Sidebar.propTypes = {
    mainMenu: PropTypes.object
};