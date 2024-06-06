import { FcCurrencyExchange, FcWorkflow } from "react-icons/fc";
import { Link } from "react-router-dom";


const EmployeeHome = () => {
    const user = { role: 'Empolyee', firstName: 'Maksud' }
    // const user = { role: 'HR Officer', firstName: 'Maksud' }
    // const user = { role: 'Admin', firstName: 'Maksud' }
    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <div>
                <h2 className="font-poppins text-3xl"> Welcome, {`${user.firstName}!` || 'Buddy!'}</h2>

                <p className={user.role === "Empolyee" && "bg-green-100 w-fit px-5 rounded-full mt-2 font-poppins text-sm py-0.5 text-green-800" || user.role === "HR Officer" && "bg-orange-100 w-fit px-5 rounded-full mt-2 font-poppins text-sm py-0.5 text-orange-800" || user.role === "Admin" && "bg-red-100 w-fit px-5 rounded-full mt-2 font-poppins text-sm py-0.5 text-red-800"} >{
                    `${user.role}`
                }</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-5">
                <Link to={'work-sheet'} className="md:col-span-6 bg-gray-200 dark:bg-gray-900 hover:dark:bg-gray-800 rounded-lg shadow-lg p-5 flex justify-center items-center flex-col hover:bg-gray-100">
                    <div className="flex items-center justify-center flex-col hover:scale-110 duration-200 px-3 py-10 rounded-lg hover:cursor-pointer">
                        <FcWorkflow className="text-red-900 text-5xl" />
                        <h2 className="text-xl decoration-wavy font-poppins text-center">Work Sheet</h2>
                    </div>
                </Link>
                <Link to={'payment-history'} className="md:col-span-6 bg-gray-200 dark:bg-gray-900 hover:dark:bg-gray-800 rounded-lg shadow-lg p-5 flex justify-center items-center flex-col hover:bg-gray-100">
                    <div className="flex items-center justify-center flex-col hover:scale-110 duration-200 px-3 py-10 rounded-lg hover:cursor-pointer">
                        <FcCurrencyExchange className="text-red-900 text-5xl " />
                        <h2 className="text-xl font-poppins text-center">Payment History</h2>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default EmployeeHome;