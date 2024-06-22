// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Loading from '../../../components/Loading';
import { useUserData } from '../../../hook/useUserData';

const EmployeeDetails = () => {

    const { id } = useParams();
    const userId = id;

    const { data: user, error, isLoading } = useUserData(userId);
    console.log(user)

    // const [employee, setEmployee] = useState(null);
    // const [payments, setPayments] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchEmployeeDetails = async () => {
    //         try {
    //             const { data } = await axios.get(`/users/${id}`);
    //             setEmployee(data.user);
    //             setPayments(data.payments);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchEmployeeDetails();
    // }, [id]);

    console.log(userId)

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching employee list</div>;


    // if (loading) return <Loading/>;
    // if (error) return <div>An error occurred: {error}</div>;

    // const paymentData = payments.map((payment) => ({
    //     month: `${payment.month}-${payment.year}`,
    //     amount: payment.amount,
    // }));

    return (
        <div className='mx-auto w-11/12 container'>

            <h2 className='text-center font-semibold font-poppins text-red-800 text-4xl py-10'>Employee Information</h2>

            <div className='flex justify-between border px-5 py-5 rounded-md border-b-0 border-red-700 items-center dark:text-white'>
                <div>
                    <h2 className='text-2xl font-bold font-poppins '>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <div>
                    <img src={user.photoURL} className='w-32 h-32 object-cover rounded-full border-4 border-red-700' alt="" />
                </div>
            </div>
            {/* <h2>Employee Details</h2>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Verified: {employee.isVerified ? '✅' : '❌'}</p> */}

            <h3 className='dark:text-white px-5 text-lg font-semibold font-relaway'>Salary Payments</h3>
            {/* <BarChart width={600} height={300} data={paymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart> */}
        </div>
    );
};

export default EmployeeDetails;
