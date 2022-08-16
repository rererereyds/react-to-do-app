import React from 'react'
import Tasks from './Tasks';

// nililista lang dito yung about sa task pero sa Tasks.js ang nagdi-display based sa sturcture na written. bridge lang itey.

const TaskList = (props) => {

  const tasks = props.tasks.map(task => {
    return (
    <Tasks
      key = {task.id}
      id = {task.id}
      name = {task.name}
      status = {task.status}
      createdAt = {task.createdAt}
      updatedAt = {task.updatedAt}
      completeTask = {props.completeTask}
      deleteTask = {props.deleteTask}
    />
    );
  });

  return (
    <>
      {tasks}
    </>
  );
};

export default TaskList;