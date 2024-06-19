import React, { useState } from 'react';

const PaymentModal = ({ employee, onClose, onPay }) => {
    const [amount, setAmount] = useState(employee.salary);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = () => {
        onPay(employee._id, amount, month, year);
    };

    return (
        <div className="modal">
            <h2>Pay {employee.name}</h2>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <label>
                Month:
                <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
            </label>
            <label>
                Year:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Pay</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default PaymentModal;
