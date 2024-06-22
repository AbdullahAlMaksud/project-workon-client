import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateUserData, useUserData } from '../../../hook/useUserData';
import Loading from '../../../components/Loading';
import { Helmet } from 'react-helmet-async';

const EditEmployee = () => {
    const { id } = useParams();
    const userId = id;

    const { data: user, error, isLoading } = useUserData(userId);
    const updateUserMutation = useUpdateUserData(userId);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        bank_account_no: '',
        salary: '',
        role: 'employee', // Default value
        designation: '',
        photoURL: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                bank_account_no: user.bank_account_no,
                salary: user.salary,
                role: user.role,
                designation: user.designation,
                photoURL: user.photoURL
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUserMutation.mutateAsync({ id: userId, data: formData });
            // If successful, you may want to show a success message or redirect
            console.log('Successful')
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching employee list</div>;

    return (
        <div className='w-11/12 container mx-auto'>
            <Helmet>
                <title>WorkOn | Update UserInfo ({formData.email})</title>
            </Helmet>
            <h2 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10 rounded-lg">Update User Info</h2>
            <form onSubmit={handleSubmit} className='bg-red-100 rounded p-10'>
                <div>
                    <div className='flex w-full justify-center'>
                        <img src={formData.photoURL} alt="" className='rounded-full w-20 h-20 object-cover border-red-700 border-4' />
                    </div>
                    <label>
                        <h2 className='font-bold py-2 text-lg text-center'>PhotoURL:</h2>
                        <input type="text" name="photoURL" className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' value={formData.photoURL} onChange={handleChange} />
                    </label>
                </div>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Name:</h2>
                    <input type='text' name="name" value={formData.name} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Email:</h2>
                    <input type='text' name="email" value={formData.email} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' disabled />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Phone Number:</h2>
                    <input type='tel' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Bank Account No:</h2>
                    <input type='text' name="bank_account_no" value={formData.bank_account_no} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Salary:</h2>
                    <input type='number' name="salary" value={formData.salary} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Role:</h2>
                    <select name="role" value={formData.role} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black'>
                        <option value="employee">Employee</option>
                        <option value="hr">HR</option>
                    </select>
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Designation:</h2>
                    <input type='text' name="designation" value={formData.designation} onChange={handleChange} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>

                <input type="submit" value="Update" className='bg-red-800 text-white w-full mt-5 py-2 rounded font-bold hover:bg-red-700 shadow shadow-black/50 hover:cursor-pointer hover:shadow-lg hover:shadow-black/20' />
            </form>
        </div>
    );
};

export default EditEmployee;
