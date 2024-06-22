// import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import TaskTable from './TaskTable';
// import AddTaskForm from './AddTaskForm';
// import Loading from '../../../../components/Loading';
import useAuth from '../../../hook/useAuth';
import TaskTable from '../Empolyee/WorkSheet/TaskTable';
import AddTaskForm from '../Empolyee/WorkSheet/AddTaskForm';
import Loading from '../../../components/Loading';

const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    return res.data;
};

const WorkSheet = () => {
    const { user } = useAuth();
    const userEmail = user.email;

    console.log(userEmail)

    const { data: tasks, isLoading, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching tasks: {error.message}</div>;

    // Example userEmail, replace with actual userEmail retrieval logic

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10">Employee Work-Sheet</h1>
            <TaskTable tasks={tasks} />
            <AddTaskForm userEmail={userEmail} />
        </div>
    );
};

export default WorkSheet;
