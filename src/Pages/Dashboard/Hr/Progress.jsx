import { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';

// Fetch work records function
const fetchWorkRecords = async ({ queryKey }) => {
    const [, filters] = queryKey;
    try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/work-records`, { params: filters });
        return res.data;
    } catch (error) {
        console.error('Error fetching work records:', error);
        throw new Error('Error fetching work records');
    }
};

// Fetch employees function
const fetchEmployees = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/employees`);
        return res.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw new Error('Error fetching employees');
    }
};

// Update work record function
const updateWorkRecord = async ({ id, updates }) => {
    const res = await axios.patch(`${import.meta.env.VITE_SERVER}/work-records/${id}`, updates);
    return res.data;
};

const Progress = () => {
    const queryClient = useQueryClient();
    const [filters, setFilters] = useState({ employeeName: '', month: '' });

    // useQuery hook to fetch work records
    const { data: workRecords, isLoading, error } = useQuery({
        queryKey: ['workRecords', filters],
        queryFn: fetchWorkRecords,
    });

    // useQuery hook to fetch employees
    const { data: employees } = useQuery({
        queryKey: ['employees'],
        queryFn: fetchEmployees,
    });

    // useMutation hook to update a work record
    const mutation = useMutation({
        mutationFn: updateWorkRecord,
        onSuccess: () => {
            // Invalidate and refetch work records query after a record is updated
            queryClient.invalidateQueries(['workRecords']);
            toast.success('Work record updated successfully!');
        },
    });

    // Handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    // Handle work record update
    const handleUpdate = (id, updates) => {
        mutation.mutate({ id, updates });
    };

    // Loading and error states
    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching work records: {error.message}</div>;

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className='text-center font-semibold font-poppins text-red-800 text-4xl py-10'>Work Records</h1>
            <div className='flex gap-2'>
                <label className='flex flex-col'>
                    Employee Name:
                    <select name="employeeName" value={filters.employeeName} onChange={handleFilterChange} className="border p-2 rounded">
                        <option value="">All</option>
                        {employees?.map((employee) => (
                            <option key={employee._id} value={employee.name}>
                                {employee.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='flex flex-col'>
                    Month:
                    <input
                        type="month"
                        name="month"
                        value={filters.month}
                        onChange={handleFilterChange}
                        className="border p-2 rounded"
                    />
                </label>
            </div>


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
                                                <h3>Employee Name</h3>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Work Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Hours
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
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



                                        {workRecords?.map((record) => (
                                            <tr className='text-center text-sm h-9' key={record._id}>
                                                <td>{record.userName}</td>
                                                <td>{record.task}</td>
                                                <td>{new Date(record.date).toLocaleDateString()}</td>
                                                <td>{record.hoursWorked} Hours</td>
                                                <td>
                                                    <p className={record.status === 'completed' ? 'bg-green-100 text-green-600 px-3 py-0.5 capitalize rounded-full' : 'bg-red-100 text-red-600 px-3 py-0.5 capitalize rounded-full'}>{record.status || 'pending'}</p>
                                                </td>
                                                <td>
                                                    <button className='bg-orange-500 px-3 py-1 rounded-sm hover:bg-orange-800 hover:text-white hover:shadow-md hover:shadow-black/40 min-w-28 disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-black disabled:hover:shadow-none ' onClick={() => handleUpdate(record._id, { status: 'completed' })}
                                                        disabled={record.status === 'completed'}
                                                    >
                                                        Mark as Completed
                                                    </button>
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

export default Progress;
