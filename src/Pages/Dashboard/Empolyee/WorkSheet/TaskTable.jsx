const TaskTable = ({ tasks }) => {
    return (
        <table className='bg-white/80 dark:bg-white/10 rounded-t table table-fixed w-full'>
            <thead className='bg-red-100 dark:bg-white/15 h-12'>
                <tr>
                    <th>Task</th>
                    <th>Hours Worked</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody className='text-center h-9'>
                {tasks.map((task, index) => (
                    <tr key={index} className="h-10 border-b dark:border-gray-50/10">
                        <td>{task.task}</td>
                        <td>{task.hoursWorked} Hours</td>
                        <td>{new Date(task.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
