import React from 'react'
import TaskList from './TaskList';

const PendingTasks = ({tasks, completeTask, deleteTask}) => {
  return (
    <div>
      <h1>Pending Tasks</h1>
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default PendingTasks;