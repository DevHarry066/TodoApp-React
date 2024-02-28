import { useState, useEffect, useCallback } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json(); // Wait for JSON parsing
        setTodos(json.todos);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        // Handle error here, e.g., setTodos([])
      });
  }, []); // Empty dependency array to execute only once on component mount
  
  return (
    <>
      <div>
      New React App<br />
      <br />
      <CreateTodo />
      {todos && <Todos todos={todos}></Todos>}
      </div>
    </>
  )
}

export default App
