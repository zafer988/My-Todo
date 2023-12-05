import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ value, toggleComplete, deleteTodo, editTodo }) => {
  console.log(value);
  return (
    <>

      <div className={`todo ${value.completed ? 'completed' : ''}`}>
        <p onClick={() => toggleComplete(value.id)}>{value.value}</p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(value.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(value.id)} />
        </div>
      </div>

    </>
  )
}

export default Todo