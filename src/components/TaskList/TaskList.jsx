import React from 'react';
import Task from '../Task/Task';


const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}>
                </Task>

            ))}
        </div>
    );
};

export default TaskList;
