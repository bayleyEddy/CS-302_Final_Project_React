import React, { useState } from 'react';
import TaskInput from './TaskInput';
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);

  //Adds new task to task array
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  //Deletes task by index 
  const deleteTask = (indexToDelete) =>{
    setTasks(tasks.filter((_,index)=> index !==indexToDelete))
  }

  return (
    <div className ='App'>
      <h1>Task Manager</h1>
      <TaskInput handleAddTask={addTask} />
      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>
            {task}
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
