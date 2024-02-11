import React, { useState } from 'react';

const Task = ({ task, onToggle, onDelete, onUpdate }) => {
    const [isEditing, setEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(task.text);
    const [updatedPriority, setUpdatedPriority] = useState(task.priority);

    const handleUpdate = () => {
        onUpdate(task.id, updatedText, updatedPriority);
        setEditing(false);
    };

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div className="flex items-center">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={updatedText}
                            onChange={(e) => setUpdatedText(e.target.value)}
                            className="border p-2 rounded"
                        />
                        <select
                            value={updatedPriority}
                            onChange={(e) => setUpdatedPriority(e.target.value)}
                            className="border p-2 rounded"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </>
                ) : (
                    <>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggle(task.id)}
                            className="mr-2"
                        />
                        <span className={task.completed ? 'line-through' : ''}>
                            {task.text} (Priority: {task.priority})
                        </span>
                    </>
                )}
            </div>
            <div className='space-x-5'>
                {isEditing ? (
                    <>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800"
                            onClick={handleUpdate}>Save</button>

                        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-800"
                            onClick={() => setEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-800"
                            onClick={() => setEditing(true)}>Edit</button>

                        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-800"
                            onClick={() => onDelete(task.id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Task;
