import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import TitleText from '../../../components/TitleText';

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
// Fire employee function
const fireEmployee = async (id) => {
    const res = await axios.patch(`${import.meta.env.VITE_SERVER}/employee/fire/${id}`);
    return res.data;
};

const AllEmployeeList = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

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
    // useMutation hook to fire employee
    const fireEmployeeMutation = useMutation({
        mutationFn: fireEmployee,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['verifiedEmployees']);
            toast.success('Employee fired successfully!');
            // Force logout and redirect to homepage
            if (data.status === 'fired') {
                navigate('/');
                toast.info('You have been logged out.');
            }
        },
    });
    // Handle role update
    const handleRoleUpdate = (id, newRole) => {
        updateRoleMutation.mutate({ id, newRole });
    };
    // Handle fire employee
    const handleFire = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, fire him/her!'
        }).then((result) => {
            if (result.isConfirmed) {
                fireEmployeeMutation.mutate(id);
            }
        });
    };

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching employees: {error.message}</div>;

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <TitleText props={'All Employee List'} />
            <h1 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10 rounded-lg">All Employee List</h1>
            <section className="container mx-auto">
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-2 overflow-x-auto">
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
                                                        <button
                                                            className={employee.role === 'employee' ? `bg-blue-500 px-5 rounded-full text-white hover:shadow-md hover:shadow-black/20 py-0.5` : `hidden`}
                                                            onClick={() => handleRoleUpdate(employee._id, 'hr')}
                                                        >
                                                            {employee.role === 'employee' ? 'Promote to HR' : 'Promotion Completed'}
                                                        </button>
                                                        <button
                                                            className={employee.status === 'fired' ? `hidden` : `bg-red-500 min-w-16 rounded-full hover:bg-red-800 hover:text-white hover:shadow-md text-red-100 hover:shadow-black/20 py-0.5 `}
                                                            onClick={() => handleFire(employee._id)}
                                                        >
                                                            Fire
                                                        </button>
                                                        {employee.status === 'fired' && <span className="text-red-700 bg-red-200 min-w-16 rounded-full  py-0.5">Fired</span>}
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
            </section>
        </div>
    );
};

export default AllEmployeeList;