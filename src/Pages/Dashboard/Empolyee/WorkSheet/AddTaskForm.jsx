import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTaskForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const [hoursWorked, setHoursWorked] = useState(0);
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'hoursWorked' && value < 0) {
            setError('Hours worked cannot be negative.');
        } else {
            setError('');
            if (name === 'hoursWorked') {
                setHoursWorked(value);
            } else if (name === 'task') {
                setTask(value);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hoursWorked < 0) {
            setError('Hours worked cannot be negative.');
            return;
        }
        setError('');
        const newTask = { task, hoursWorked, date: date.toISOString() };
        onAddTask(newTask);
        setTask('');
        setHoursWorked(0);
        setDate(new Date());
    };

    return (
        <div className='mx-auto w-11/12 container'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='grid grid-cols-3 h-10 bg-red-900'>
                    <select
                        value={task}
                        onChange={handleChange}
                        name='task'
                        required
                        className='col-start-1 col-end-2 text-center bg-red-900 text-white'
                    >
                        <option value="">Select Task</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Content">Content</option>
                        <option value="Paper-work">Paper-work</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="number"
                        name='hoursWorked'
                        onChange={handleChange}
                        value={hoursWorked}
                        placeholder="Hours Worked"
                        required
                        className='col-start-2 col-end-3 text-center bg-red-900 text-white'
                    />
                    <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        required
                        name='date'
                        className='col-start-3 w-full text-center col-end-4 h-10 bg-red-900 text-white'
                    />
                </div>
                <button type="submit" className='bg-red-800 text-white py-3 font-semibold rounded-b shadow-lg shadow-black/50 hover:bg-red-700 active:shadow-none'>
                    Add/Submit
                </button>
                {error && <div className='text-red-700 text-center pt-5 animate-bounce font-bold'>**{error}</div>}
            </form>
        </div>
    );
};

export default AddTaskForm;
