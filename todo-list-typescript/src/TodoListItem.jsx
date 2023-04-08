import React from 'react'

export default function TodoListItem() {
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <ul>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
        <input type="text" placeholder='Add todo item'/>
        <button>Add</button>
    </div>
  )
}