import React, { useEffect, useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import PaymentModal from './PaymentModal';
import { Link } from 'react-router-dom';
import useAxiosNormal from '../../../hook/useAxiosNormal';
import Loading from '../../../components/Loading';


const EmployeeList = () => {
    const axiosNormal = useAxiosNormal();
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const fetchEmployees = async () => {
        try {
            const { data } = await axiosNormal.get('/employees');
            setEmployees(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleVerify = async (userId) => {
        try {
            await axiosNormal.post(`/users/verify/${userId}`);
            setEmployees((prev) =>
                prev.map((emp) =>
                    emp._id === userId ? { ...emp, isVerified: !emp.isVerified } : emp
                )
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const handlePay = async (userId, amount, month, year) => {
        try {
            await axios.post(`/users/pay`, { userId, amount, month, year });
            setSelectedEmployee(null);
            fetchEmployees(); // Refetch employees after payment
        } catch (err) {
            setError(err.message);
        }
    };

    if (isLoading) return <Loading />;
    if (error) return <div>An error occurred: {error}</div>;


    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h2 className='text-center font-semibold font-poppins text-red-800 text-4xl py-10'>Employee List</h2>


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
                                                Verified
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Bank Account
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
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
                                                <td>
                                                    <button className='' onClick={() => handleVerify(employee._id)}>
                                                        {employee.isVerified ? '✅' : '❌'}
                                                    </button>
                                                </td>
                                                <td>{employee.bank_account_no}</td>
                                                <td>{employee.salary}</td>
                                                <td>
                                                    <div className='flex justify-center mx-2 gap-1'>

                                                        <button className='bg-green-500 px-3 py-1 rounded hover:bg-green-800 hover:text-white hover:shadow-md hover:shadow-black/20' onClick={() => setSelectedEmployee(employee)}>Pay</button>
                                                        <Link className='bg-orange-500 px-3 py-1 rounded hover:bg-orange-800 hover:text-white hover:shadow-md hover:shadow-black/20 min-w-28' to={`/dashboard/details/${employee._id}`}>View Details</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                                {selectedEmployee && (
                                    <PaymentModal
                                        employee={selectedEmployee}
                                        onClose={() => setSelectedEmployee(null)}
                                        onPay={handlePay}
                                    />
                                )}
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

export default EmployeeList;

