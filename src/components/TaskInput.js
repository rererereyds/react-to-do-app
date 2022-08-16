import React, {useEffect, useState} from 'react'

const TaskInput = (props) => {
  const [taskName, setTaskName] = useState("");
  const [isSubmittable, setIsSubmittable] = useState(true);

  const [task, setTask] = useState({
    name: '',
    createdAt: '',
    updatedAt: '',
    status: 'pending'
  });

  const onChange = (e) => {
    if (e.target.value.length > 0) {
      setIsSubmittable(false);
    }
    setTaskName(e.target.value);
    setTask({
      ...task,
      name: e.target.value,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      status: 'pending'
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();

    if (task.name !== '' && task.createdAt !== '' && task.updatedAt !== '' && task.status !== '') {
      onChange({target: {value: ''}});
      setIsSubmittable(true);

      props.submit(task);
    }
  };

  return (

    <div>
      <div className='new-task-container'>

        <div className='to-do-input'>
          <p className='to-do-word'>To Do:</p>
          <input className='textarea' placeholder='Type your new task here.' value={taskName} type="textarea" onChange={onChange} required/>
        </div>

        {/* <button className='submit-btn' disabled={isSubmittable} onClick={onSubmitTask}>Submit</button> */}
        {taskName.trim().length > 0
          ? <button className='submit-btn' disabled={isSubmittable} onClick={onSubmitTask}>Submit</button>
          : <button className='disable-submit-btn' disabled={isSubmittable}>Submit</button>
        }

      </div>
    </div>
  )
};

export default TaskInput