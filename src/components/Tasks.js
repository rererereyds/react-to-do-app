import React from 'react'

const Tasks = (props) => {
  return (
    <div>
      <div>
        <div className='tasks'>
          {/* <p className='task-name'>{props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}</p> */}
          <p className='task-name'>{props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase() && props.name.trim()}</p>
          <p className='created-at'>Created At: {props.createdAt}</p>
          <p className='updated-at'>Updated At: {props.updatedAt}</p>
          {props.status !== 'done'
          ? <button className='done-btn' onClick = {() => props.completeTask(props.id)}>Done</button>
          : <button className='already-done-btn' disabled={true} onClick = {() => props.completeTask(props.id)}>Done</button>}
          <button className='delete-btn' onClick = {() => props.deleteTask(props.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks

