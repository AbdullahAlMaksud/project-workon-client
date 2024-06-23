import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Loading from '../../../components/Loading';
import useAxiosNormal from '../../../hook/useAxiosNormal';
import { useUserData } from '../../../hook/useUserData';
import TitleText from '../../../components/TitleText';
import DataError from '../../../components/DataError';
// import useAxiosNormal from '../../../../hook/useAxiosNormal';
// import useUserData from '../../../../hook/useUserData';
// import TitleText from '../../../../components/TitleText';

const EmployeeDetails = () => {
    const { id } = useParams();
    const userId = id;
    const axiosNormal = useAxiosNormal();

    const { data: user, error: userError, isLoading: userLoading } = useUserData(userId);
    const [payments, setPayments] = useState([]);
    const [paymentError, setPaymentError] = useState(null);
    const [isPaymentLoading, setIsPaymentLoading] = useState(true);

    useEffect(() => {
        if (user && user.email) {
            const fetchPaymentHistory = async () => {
                try {
                    const response = await axiosNormal.get(`/payment-history/${user.email}`);
                    setPayments(response.data);
                } catch (err) {
                    setPaymentError(err.message);
                } finally {
                    setIsPaymentLoading(false);
                }
            };
            fetchPaymentHistory();
        }
    }, [user, axiosNormal]);

    if (userLoading || isPaymentLoading) return <Loading />;
    if (userError) return <DataError error={userError} />;
    if (paymentError) return <DataError error={paymentError}></DataError>;

    const paymentData = payments.map((payment) => ({
        monthYear: `${payment.month} ${payment.year}`,
        amount: parseFloat(payment.amount),
    }));

    return (
        <div className='mx-auto w-11/12 container'>
            <TitleText props={`Employee Details (${user.email})`}></TitleText>
            <h2 className='text-center font-semibold font-poppins text-red-800 text-4xl py-10'>Employee Information</h2>

            <div className='flex justify-between border px-5 py-5 rounded-md border-b-0 border-red-700 items-center dark:text-white'>
                <div>
                    <h2 className='text-2xl font-bold font-poppins '>{user.name}</h2>
                    <p>{user.email}</p>
                    {user.isVerified === true ? <p className='px-2 py-0.5 rounded-full bg-green-100 w-fit text-sm mt-1 text-green-700'>Verified</p> : <p className='px-2 py-0.5 rounded-full bg-red-100 w-fit text-sm mt-1 text-red-700'>Not Verified</p>}
                </div>
                <div>
                    <img src={user.photoURL} className='w-32 h-32 object-cover rounded-full border-4 border-red-700' alt="" />
                </div>
            </div>

            <h3 className='dark:text-white px-5 text-md uppercase bg-red-700 w-fit mx-auto text-white rounded-t-md pt-2 py-1 font-semibold font-relaway text-center'>Salary Payments</h3>
            <ResponsiveContainer width="100%" height={400} className={'bg-red-100 pt-5 rounded-t-md shadow-md shadow-black/40'}>
                <BarChart data={paymentData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="monthYear" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#CD5C5C" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EmployeeDetails;
