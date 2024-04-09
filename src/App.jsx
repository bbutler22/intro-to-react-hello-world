import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from '.TodoItem'
import Form from './Form'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text) {
    console.log('Add Todo', text);
    createTodo(text);
    
  }

  function createTodo(text) {
    let createAjax = new XMLHttpRequest;
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Form submitHandler={addTodo} />
      <TodoItem text="Important Things" id="something" />
    </>
  )
}

export default App
