import React from 'react'

export default function TodoListItem() {
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 1</li>
        </ul>
        <input type="text" placeholder='Add todo item'/>
        <button>Add</button>
    </div>
  )
}
