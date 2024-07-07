import React from 'react'

export default function TodoCard(props) {
    const {children, handleRemoveTodos, index, handleEditTodos} = props
  return (
    <li className='todoItem'>
        {children}
            <div className='actionsContainer'>
            <button onClick={()=>{
                handleEditTodos(index)
            }}><i className="fa-regular fa-pen-to-square"></i></button>
            <button onClick={()=>{
                handleRemoveTodos(index)
            }}><i className="fa-regular fa-trash-can"></i></button>
        </div>
    </li>
  )
}
