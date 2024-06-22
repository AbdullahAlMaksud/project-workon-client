import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../../provider/AuthProvider';

const TaskForm = ({ onSubmit }) => {
    const [task, setTask] = useState('');
    const [hoursWorked, setHoursWorked] = useState(0);
    const [date, setDate] = useState(new Date());

    const { user } = useContext(AuthContext);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hoursWorked < 0) {
            setError('Hours worked cannot be negative.');
            return;
        }
        setError('');
        onSubmit({ task, hoursWorked, date, userName, userEmail });
        setTask('');
        setHoursWorked(0);
        setDate(new Date());
    };

    const handleHoursChange = (e) => {
        const value = e.target.value;
        if (value < 0) {
            setError('Hours worked cannot be negative.');
        } else {
            setError('');
        }
        setHoursWorked(value);
    };


    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='grid grid-cols-3 h-10 bg-red-900'>
                <select value={task} onChange={(e) => setTask(e.target.value)} required className='col-start-1 col-end-2 text-center bg-red-900 text-white'>
                    <option value="">Select Task</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="number"
                    value={hoursWorked}
                    onChange={handleHoursChange}
                    placeholder="Hours Worked"
                    required
                    className='col-start-2 col-end-3 text-center bg-red-900 text-white'
                />
                <DatePicker selected={date} onChange={(date) => setDate(date)} required className='col-start-3 w-full text-center col-end-4 h-10 bg-red-900 text-white' />
            </div>
            <button type="submit" className='bg-red-800 text-white py-3 font-semibold rounded-b shadow-lg shadow-black/50 hover:bg-red-700 active:shadow-none'>Add/Submit</button>
            {error && <div className='text-red-700 text-center pt-5 animate-bounce font-bold'>**{error}</div>}
        </form>
    );
};

export default TaskForm;
