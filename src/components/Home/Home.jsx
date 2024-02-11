import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import useLocalStorage from '../../useLocalStorage';


const Home = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [filter, setFilter] = useState('all');

    const handleAddTask = ({ text, priority }) => {
        const newTask = {
            id: tasks.length + 1,
            text,
            priority,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const handleUpdateTask = (id, updatedText, updatedPriority) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id
                ? { ...task, text: updatedText, priority: updatedPriority }
                : task
        );
        setTasks(updatedTasks);
    };

    const handleToggleTask = id => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const filteredTasks =
        filter === 'all' ? tasks : tasks.filter(task => task.priority === filter);

    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl">
                <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">
                    Todo List
                </h1>

                <TaskForm onSubmit={handleAddTask}></TaskForm>

                <div className="mb-4 space-y-4">
                    <label className="block text-xl font-bold text-gray-600">
                        Filter by Priority:
                    </label>
                    <select
                        className="border p-2 rounded"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <TaskList
                    tasks={filteredTasks}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                    onUpdate={handleUpdateTask}>
                </TaskList>

                <div className="mt-4 text-gray-700 text-center">
                    <p className="text-xl font-bold">
                        Total Tasks: <span className="font-bold text-blue-600">{tasks.length}</span></p>
                    <p className="text-xl font-bold">
                        Completed Tasks:{' '}
                        <span className="font-bold text-green-600">{completedTasks}</span></p>
                </div>

            </div>
        </div>
    );
};

export default Home;
