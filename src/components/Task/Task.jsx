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
    <div className="flex justify-between items-center">
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <select
              value={updatedPriority}
              onChange={(e) => setUpdatedPriority(e.target.value)}
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
            />
            <span className={task.completed ? 'line-through' : ''}>
              {task.text} (Priority: {task.priority})
            </span>
          </>
        )}
      </div>
      <div className='space-y-5'>
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
