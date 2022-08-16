import './App.css';
import { Routes, Route } from 'react-router';
import TaskInput from './components/TaskInput';
import PendingTasks from './components/PendingTask';
import NotFoundPage from './components/NotFoundPage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import DoneTasks from './components/DoneTasks';
import AllTasks from './components/AllTasks';

function App() {

  /////FOR PENDING TASKS
  const [tasks, setTasks] = useState([]);


  const addTaskToArray = (newTask) => {
    console.log(newTask);
    let hasDuplicate = false;

    tasks.filter(function(task) {
      // hasDuplicate = task.name.toLowerCase() === newTask.name.toLowerCase()
      hasDuplicate = task.name.trim().toLowerCase() === newTask.name.trim().toLowerCase()  
    });

    if (!hasDuplicate) {
      const task = {
        id: uuidv4(),
        ...newTask
      }
      const newTasks = [...tasks, task];
      setTasks(newTasks);
    } else {
      alert('Task already exist!')
    }
  };

  const pendingTasks = tasks.filter((task) => 
    task.status === 'pending'
  );
  
  const doneTasks = tasks.filter((task) => 
    task.status === 'done'
  );

  const completeTaskHandler = (id) => {
    let tempTasks = [...tasks];
    const index = tempTasks.findIndex(task => task.id === id);
    tempTasks[index].status = 'done';
    tempTasks[index].updatedAt = new Date().toString();

    setTasks(tempTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">

      {/* eto wag alisin  */}
      <nav>
        <img className='ufo-image' alt="UFO" src="https://cdn-icons-png.flaticon.com/512/3306/3306571.png"/>

        <Link to="">Pending Tasks</Link>
        <Link to="doneTasks">Done Tasks</Link>
        <Link to="allTasks">Overall Tasks</Link>
      </nav>

      <TaskInput submit={addTaskToArray}/>
      {/* hanggang dito kasi hindi sila part ng mapapalitan every change ng router */}

      <Routes>
        <Route path="/" element={<PendingTasks tasks={pendingTasks} completeTask={completeTaskHandler} deleteTask={deleteTask}/>} />
        <Route path="/doneTasks" element={<DoneTasks tasks={doneTasks} completeTask={completeTaskHandler} deleteTask={deleteTask}/>} />
        <Route path="/allTasks" element={<AllTasks tasks={tasks} completeTask={completeTaskHandler} deleteTask={deleteTask}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
