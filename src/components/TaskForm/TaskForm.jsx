import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit({ text, priority });
        setText('');
        setPriority('low'); // Reset priority after submitting
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    className='w-full border p-2 rounded mt-5'
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border p-2 rounded w-full mt-5"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full mt-5"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
