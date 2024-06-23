import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../../../hook/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';
import { format } from 'date-fns';

registerLocale('en-US', enUS);

const PaymentModal = ({ employee, onClose, onPay }) => {
    const [amount, setAmount] = useState(employee.salary);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonthYear, setCurrentMonthYear] = useState('');

    const { user } = useAuth();
    const userName = employee.name;
    const userEmail = employee.email;
    const status = 'paid';

    useEffect(() => {
        const currentDate = new Date();
        const month = format(currentDate, 'MMMM');
        const year = format(currentDate, 'yyyy');
        setCurrentMonthYear(`${month} ${year}`);
    }, []);

    const handleSubmit = () => {
        if (selectedDate) {
            const month = format(selectedDate, 'MMMM');
            const year = format(selectedDate, 'yyyy');
            onPay(employee._id, amount, month, year, userName, userEmail, status);
        }
    };

    const handleMonthYearChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-20 font-relaway">
            <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-center items-center">
                <span className='text-center bg-white text-red-700 px-3 py-1 font-relaway font-bold uppercase rounded-tl-xl'>payment</span>
                <h2 className="text-lg font-bold text-center pt-2">{employee?.name}</h2>
                <p className="mb-4">{currentMonthYear}</p>
                <div className='flex gap-3'>
                    <div className="block mb-2">
                        <p className="rounded text-white">Amount (BDT):</p>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="border rounded py-1 w-full"
                        />
                    </div>
                    <div className="block mb-2">
                        <p className="rounded px-2 text-white">Month and Year:</p>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleMonthYearChange}
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                            locale="en-US"
                            className="border rounded overflow-hidden py-1"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleSubmit} className="bg-red-500 shadow-md font-medium text-white px-4 py-2 rounded mr-2 min-w-24 hover:bg-red-600 active:scale-100 hover:scale-105">
                        Pay
                    </button>
                    <button onClick={onClose} className="bg-gray-600 text-white px-4 py-2 shadow-md font-medium rounded min-w-24 hover:bg-black active:scale-100 hover:scale-105">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

PaymentModal.propTypes = {
    employee: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onPay: PropTypes.func.isRequired,
};

export default PaymentModal;
