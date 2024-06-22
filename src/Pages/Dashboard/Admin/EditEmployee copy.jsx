import { useParams } from 'react-router-dom';
import { useUpdateUserData, useUserData } from '../../../hook/useUserData';
import Loading from '../../../components/Loading';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';


const EditEmployee = () => {
    const id = useParams()
    console.log(id.id)
    const userId = id.id;


    const { data: user, error, isLoading } = useUserData(userId);
    // console.log(user)
    const updateUserMutation = useUpdateUserData();
    const [formData, setFormData] = useState({ name: '', email: '' });


    useEffect(() => {
        if (user) {
            setFormData({ name: user.name, email: user.email });
        }
    }, [user]);

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching employee list</div>;

    const { role, name, email, phoneNumber, designation, salary, photoURL, bank_account_no } = user;
    // console.log(name)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email;
        console.log(email)

        // updateUserMutation.mutate({ id: userId, data: formData });


    }

    return (
        <div className='w-11/12 container mx-auto '>
            <Helmet>
                <title>WorkOn | Update UserInfo ({email})</title>
            </Helmet>
            <h2 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10 rounded-lg">Update User Info</h2>
            <form onSubmit={handleSubmit} className='bg-red-100 rounded p-10'>
                <div>
                    <div className='flex w-full justify-center'>
                        <img src={photoURL} alt="" className='rounded-full w-20 h-20 object-cover border-red-700 border-4' />
                    </div>
                    <label>
                        <h2 className='font-bold py-2 text-lg text-center'>PhotoURL:</h2>
                        <input type="text" name="photoURL" className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' defaultValue={photoURL} />
                    </label>
                </div>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Name:</h2>
                    <input type='text' name="name" defaultValue={name} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Email:</h2>
                    <input type='text' name="email" defaultValue={email} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' disabled />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Phone Number:</h2>
                    <input type='tel' name="phoneNumber" defaultValue={phoneNumber} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Bank Account No:</h2>
                    <input type='text' name="bank_account_no" defaultValue={bank_account_no} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Salary:</h2>
                    <input type='number' name="salary" defaultValue={salary} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Role:</h2>
                    <select defaultValue={role} name="role" value={role} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black'>
                        <option value="employee">Employee</option>
                        <option value="hr">HR</option>
                    </select>
                </label>
                <label>
                    <h2 className='font-bold py-2 text-lg'>Designation:</h2>
                    <input type='text' name="designation" defaultValue={designation} className='text-lg w-full dark:text-white bg-red-50 border-red-800 border px-5 py-2 rounded dark:bg-black' />

                </label>

                <input type="submit" value="Update" className='bg-red-800 text-white w-full mt-5 py-2 rounded font-bold hover:bg-red-700 shadow shadow-black/50 hover:cursor-pointer hover:shadow-lg hover:shadow-black/20' />
            </form>
        </div>
    );
};

export default EditEmployee;