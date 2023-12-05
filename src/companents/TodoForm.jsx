import React, { useState } from 'react'


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('9')
    console.log(value);
  }
  return (
    <>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text"
          placeholder='What is the Plan for Today?' onChange={(e) => setValue(e.target.value)} value={value} className='todo-input' />
        <button type='submit' className='todo-btn'>Add Todo</button>

      </form>
    </>
  )
}

export default TodoForm