import React, { useState, useEffect } from 'react';
import Task from './Task';

const DailySchedule = ({ date }) => {
    const defaultTasks = [
        { text: 'IT SCHOOL ga borish', completed: false },
        { text: 'Montaj qilish', completed: false },
        { text: "Dars o'tish", completed: false },
        { text: 'Koreys tilini o\'rganish', completed: false },
        { text: 'Node.js o\'rganish', completed: false },
        { text: 'Interyuv questions', completed: false },
    ];
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem(`tasks-${date}`)) || defaultTasks;
        setTasks(savedTasks);
    }, [date]);

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, { text: newTask, completed: false }];
        setTasks(updatedTasks);
        localStorage.setItem(`tasks-${date}`, JSON.stringify(updatedTasks));
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem(`tasks-${date}`, JSON.stringify(updatedTasks));
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem(`tasks-${date}`, JSON.stringify(updatedTasks));
    };

    const saveTasks = () => {
        localStorage.setItem(`tasks-${date}`, JSON.stringify(tasks));
        alert('Vazifalar saqlandi');
    };

    return (
        <div className="mt-4 p-4 border rounded-lg bg-white shadow-lg">
            <h2 className="text-xl font-bold mb-2">Kunning Vazifalari: {date}</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Task 
                        key={index} 
                        task={task} 
                        onDelete={() => deleteTask(index)} 
                        onToggle={() => toggleTaskCompletion(index)}
                    />
                ))}
            </ul>
            <div className="mt-4">
                <input 
                    type="text" 
                    placeholder="Yangi vazifa kiriting"
                    className="border p-2 mr-2 rounded"
                    onKeyDown={(e) => {
                        if ( e.key === "Enter") {
                            addTask(e.target.value);
                            e.target.value = "";
                        }
                    }}
                />
                <button onClick={saveTasks} className="bg-green-500 text-white p-2 ml-2 rounded">Vazifalarni saqlash</button>
            </div>
        </div>
    );
};

export default DailySchedule;
