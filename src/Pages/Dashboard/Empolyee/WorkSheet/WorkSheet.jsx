import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import TaskTable from './TaskTable';
import AddTaskForm from './AddTaskForm';
import Loading from '../../../../components/Loading';
import useAuth from '../../../../hook/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const WorkSheet = () => {
    const { user } = useAuth();
    const email = user?.email;
    const name = user?.displayName;
    const queryClient = useQueryClient();

    const fetchTasks = async () => {
        if (!email) return []; // Return an empty array if email is not available
        const res = await axios.get(`http://localhost:5000/tasks/${email}`);
        return res.data;
    };

    const { data: tasks, isLoading, error, refetch } = useQuery({
        queryKey: ['tasks', email],
        queryFn: fetchTasks,
        enabled: !!email,
    });

    const addTaskMutation = useMutation({
        mutationFn: async (newTask) => {
            await axios.post('http://localhost:5000/tasks', newTask);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks', email]);
            toast.success('Work Added.');
            refetch();
        },
        onError: (error) => {
            // toast.error(`Error adding task: ${error.response?.data?.message || error.message}`);
            console.log(error)
            refetch();
        }
    });

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching tasks: {error.response?.data?.message || error.message}</div>;

    const handleAddTask = (newTask) => {
        addTaskMutation.mutate({ ...newTask, userEmail: email, userName: name });
    };

    return (
        <div className="dark:text-white container mx-auto w-11/12 my-12 lg:my-5 h-full">
            <Helmet>
                <title>WorkOn | My WorkSheet ({email})</title>
            </Helmet>

            <h1 className="text-center text-4xl font-semibold text-red-900 font-poppins py-10">My Work-Sheet</h1>
            <TaskTable tasks={tasks} />
            <AddTaskForm onAddTask={handleAddTask} />
        </div>
    );
};

export default WorkSheet;
