import React from 'react'
import Tasks from './Tasks';

const TaskPage = ({tasks, completeTask}) => {
  let filter = status === "done"
    ? true
    : false;


  return (
    <div>
        <h1>{status} Task Page</h1>
        {
          tasks.filter((task) => 
            task.done === filter
          ).map((task) => 
            <Tasks 
              id = {task.id}
              name = {task.name}
              status = {task.status}
              createdAt = {task.createdAt}
              updatedAt = {task.updatedAt}
              completeTask = {completeTask}
            />
          )
        }
    </div>
  )
}

export default TaskPage