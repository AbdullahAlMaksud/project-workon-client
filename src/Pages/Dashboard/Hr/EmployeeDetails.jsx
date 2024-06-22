// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const EmployeeDetails = () => {

    const { id } = useParams();
    console.log(id)
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

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>An error occurred: {error}</div>;

    // const paymentData = payments.map((payment) => ({
    //     month: `${payment.month}-${payment.year}`,
    //     amount: payment.amount,
    // }));

    return (
        <div>
            {/* <h2>Employee Details</h2>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Verified: {employee.isVerified ? '✅' : '❌'}</p> */}

            <h3>Salary Payments</h3>
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
