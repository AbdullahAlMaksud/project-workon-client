import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Fetch verified employees function
const fetchVerifiedEmployees = async () => {
    const res = await axios.get('http://localhost:5000/all-employee-list');
    return res.data;
};

// Update employee role function
const updateEmployeeRole = async ({ id, newRole }) => {
    const res = await axios.patch(`http://localhost:5000/users/${id}/role`, { newRole });
    return res.data;
};

// Delete employee function
const deleteEmployee = async (id) => {
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    return res.data;
};

const AllEmployeeList = () => {
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

    // useMutation hook to delete employee
    const deleteMutation = useMutation({
        mutationFn: deleteEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries(['verifiedEmployees']);
            toast.success('Employee deleted successfully!');
        },
    });

    // Handle role update
    const handleRoleUpdate = (id, newRole) => {
        updateRoleMutation.mutate({ id, newRole });
    };

    // Handle employee deletion
    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };

    // Loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching employees: {error.message}</div>;

    return (
        <div className="container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10 rounded-lg">Verified Employees</h1>
            <table className="bg-white/80 dark:bg-white/10 rounded-t table table-fixed w-full">
                <thead className="bg-red-100 dark:bg-white/15 h-12">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.role}</td>
                            <td>
                                <button onClick={() => handleRoleUpdate(employee._id, 'HR')} className="mr-2 p-2 bg-blue-500 text-white rounded">Promote to HR</button>
                                <button onClick={() => handleDelete(employee._id)} className="p-2 bg-red-500 text-white rounded">Fire</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllEmployeeList;
