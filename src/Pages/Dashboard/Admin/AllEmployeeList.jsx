import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import Loading from '../../../components/Loading';
import { useState } from 'react';

// Fetch verified employees function
const fetchVerifiedEmployees = async () => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER}/all-employee-list`);
    return res.data;
};

// Update employee role function
const updateEmployeeRole = async ({ id, newRole }) => {
    const res = await axios.patch(`${import.meta.env.VITE_SERVER}/users/${id}/role`, { newRole });
    return res.data;
};

const AllEmployeeList = () => {
    const [isFired, setIsFried] = useState(false);
    const queryClient = useQueryClient();

    // useQuery hook to fetch verified employees
    const { data: employees, isLoading, error } = useQuery({
        queryKey: ['verifiedEmployees'],
        queryFn: fetchVerifiedEmployees,
    });
    // useMutation hook to update employee role
    const updateRoleMutation = useMutation({
        mutationFn: updateEmployeeRole,
        onSuccess: () => {
            queryClient.invalidateQueries(['verifiedEmployees']);
            toast.success('Employee role updated successfully!');
        },
    });
    // Handle role update
    const handleRoleUpdate = (id, newRole) => {
        updateRoleMutation.mutate({ id, newRole });
    };

    const handleDelete = (id) => {
        setIsFried(!isFired);
        console.log(id);
    };

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching employees: {error.message}</div>;

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10 rounded-lg">All Employee List</h1>


            <section className="container mx-auto">
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-2 overflow-x-auto ">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500  dark:text-gray-400"
                                            >
                                                <h3>Name</h3>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Designation
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 capitalize"
                                            >
                                                Salary
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>


                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                        {employees.map((employee) => (
                                            <tr className='text-center text-sm h-9' key={employee._id}>
                                                <td className='min-w-40'>{employee.name}</td>
                                                <td>{employee.email}</td>
                                                <td className={employee.role === 'employee' ? 'capitalize px-2' : 'uppercase'}>
                                                    {employee.role}
                                                </td>
                                                <td className='capitalize'>{employee.designation}</td>
                                                <td>{employee.salary}</td>
                                                <td>
                                                    <div className='flex justify-end mx-2 gap-1 min-w-72'>
                                                        <button className={employee.role === 'employee' ? `bg-blue-500 px-5 rounded-full text-white hover:shadow-md hover:shadow-black/20 py-0.5` : `hidden`} onClick={() => handleRoleUpdate(employee._id, 'hr')}>
                                                            {employee.role === 'employee' ? 'Promoted to HR' : 'Promotion Completed'}
                                                        </button>

                                                        <button className='bg-red-500 px-5 rounded-full hover:bg-red-800 hover:text-white hover:shadow-md text-red-100 hover:shadow-black/20 py-0.5' onClick={() => handleDelete(employee._id)}>{isFired === true ? 'Fired' : 'Fire'}</button>
                                                        <Link className='bg-green-500 px-3 rounded-full text-white hover:bg-green-800  hover:text-white hover:shadow-md hover:shadow-black/80 flex items-center py-0.5' to={`/dashboard/employee/${employee._id}`}>
                                                            <BiEdit />
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden items-center justify-between mt-6">
                    <a
                        href="#"
                        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 rtl:-scale-x-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                        <span>previous</span>
                    </a>
                    <div className="items-center hidden md:flex gap-x-3">
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            3
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            ...
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            12
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            13
                        </a>
                        <a
                            href="#"
                            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                        >
                            14
                        </a>
                    </div>
                    <a
                        href="#"
                        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                        <span>Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 rtl:-scale-x-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AllEmployeeList;
