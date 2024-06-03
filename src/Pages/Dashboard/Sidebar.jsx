import { Button } from "@headlessui/react";
import { FaHome } from "react-icons/fa";
import { GiSeatedMouse } from "react-icons/gi";
import { GrHomeOption } from "react-icons/gr";
import { HiHomeModern } from "react-icons/hi2";
import { TbSmartHome } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = ({ mainMenu }) => {

    return (
        <div className='min-h-screen bg-red-900 '>
            <div className="flex justify-center pt-10">
                <Link to={'/'} className='relative bg-gray-200 text-black px-4  h-12 flex items-center rounded-md active:scale-95'>
                    <h1 className='text-3xl font-black w-fit font-raleway'><span className='text-red-700'>W</span>ork<span className='text-red-700'>on</span></h1>
                    <GiSeatedMouse className='absolute -right-0 -top-0 text-black' />
                </Link>
            </div>


            <div className="pt-10 pb-5 flex flex-col justify-between min-h-[calc(100vh-88px)]">
                <div className="">
                    <ul>
                        {
                            mainMenu
                        }
                    </ul>
                </div>

                <div className="flex flex-col items-start text-white">
                    <Link to={'/'} className="flex items-center gap-3 py-2 px-10 hover:bg-red-800 w-full">
                        <TbSmartHome />
                        Home
                    </Link>
                    <button className="flex items-center gap-3 py-2 px-10 hover:bg-red-800 w-full">
                        <VscSignOut />
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;