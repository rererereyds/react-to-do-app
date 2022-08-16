import React from 'react'
import TaskList from './TaskList';

const DoneTasks = ({tasks, completeTask, deleteTask}) => {
  return (
    <div className='page'>
      <h1>Done Tasks</h1>
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default DoneTasks