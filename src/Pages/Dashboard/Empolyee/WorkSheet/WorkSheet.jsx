import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
import toast from 'react-hot-toast';

const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    return res.data;
};

const addTask = async (task) => {
    const res = await axios.post('http://localhost:5000/tasks', task);
    return res.data;
};

const WorkSheet = () => {
    const queryClient = useQueryClient();
    const { data: tasks, isLoading, error } = useQuery('tasks', fetchTasks);
    const mutation = useMutation(addTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
            toast.success('Your Worked Data Added!')
        },
    });

    const handleSubmit = (task) => {
        mutation.mutate(task);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching tasks</div>;

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <h1 className='text-center text-4xl font-semibold text-red-900 font-poppins py-10'>Employee Work-Sheet</h1>
            <TaskTable tasks={tasks} />
            <TaskForm onSubmit={handleSubmit} />
        </div>
    );
};

export default WorkSheet;