import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useAxiosNormal, { axiosNormal } from '../../../../hook/useAxiosNormal';

// const fetchPaymentHistory = async () => {
//     const response = await axios.get('http://localhost:5000/payment-history');
//     return response.data;
// };

const PaymentHistory = () => {
    const axiosNormal = useAxiosNormal()

    const [payments, setPayments] = useState();

    useEffect(() => {
        const fetchPayment = async () => await axiosNormal.get('/payment-history')
            .then(res => {
                console.log(res.data)
                setPayments(res.data)
            })
            .then(err => console.log(err))
        fetchPayment();
    }, [axiosNormal])
    // const queryKey = 'paymentHistory';

    // const { data: payments, isLoading, error } = useQuery({
    //     queryKey: [queryKey],
    //     queryFn: fetchPaymentHistory,
    // });

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error fetching payment history: {error.message}</div>;

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className='text-center font-semibold font-poppins text-red-800 text-4xl py-10'>Payment History</h1>
            <table className='bg-white/80 dark:bg-white/10 rounded-t table table-fixed w-full'>
                <thead className='bg-red-100 dark:bg-white/15 h-12'>
                    <tr className='h-10 text-center'>
                        <th>Employee Name</th>
                        <th>Month</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments?.map(pay => <tr key={pay._id} className="h-10 border-b dark:border-gray-50/10 text-center"><td>{pay.userName}</td>

                        {/* <td>{new Date(pay.date).toLocaleDateString()}</td> */}
                        <td>{pay.month}</td>
                        <td>{pay.amount} BDT</td>
                        <td>{pay.status}</td>
                    </tr>
                    )}



                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;
