import React from 'react'
import TaskList from './TaskList';

const AllTasks = ({tasks, completeTask, deleteTask}) => {
  return (
    <div>
      <h1>Overall Tasks</h1>
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default AllTasks