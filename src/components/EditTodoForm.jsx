import React, { useState } from 'react';

const EditTodoForm = ({ editTask, value }) => {
  const [inputValue, setValue] = useState(value.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(inputValue, value.id);

    setValue('');
  };
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type="text"
        className='todo-input'
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
        value={inputValue}
      />
      <button type='submit' className='todo-btn'>Update  task
      </button>
    </form>
  );
};

export default EditTodoForm;
