import React, { useState } from 'react';
const TaskInput = ({handleAddTask})=>{
    const [task, setTask] = useState('');
    //Function to add new task
    const addTask = () => {
        if (task.trim()) {
            handleAddTask(task);
            setTask('');    //Resets input field
        }
    };
    return (
        <div>
            <input
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder='enter a task'
            ></input>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}
export default TaskInput;