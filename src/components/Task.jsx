import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <li className="flex items-center mb-2 p-2 border-b">
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={onToggle} 
                className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <button onClick={onDelete} className="bg-red-500 text-white p-2 ml-auto rounded">O'chirish</button>
        </li>
    );
};

export default Task;
