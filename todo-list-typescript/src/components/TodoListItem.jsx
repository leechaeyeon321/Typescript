import { stringify } from 'querystring'
import React from 'react'
import { Interface } from 'readline'


export default function TodoListItem(props) {
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
