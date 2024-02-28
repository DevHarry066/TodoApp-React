import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const saveTodo = () => {
    console.log('save');
    fetch("http://localhost:3000/todo", {
      method: 'POST',
      body: JSON.stringify({title: title, description: description}),
      headers: {'Content-Type': 'application/json'},
    });
  }
    
  return (
    <div>
        <input type="text" placeholder="Enter the title"
        onChange={(e) => {
          setTitle(e.target.value);
        }} /> <br /> <br />
        <input type="text" placeholder="Enter description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}  /> <br /> <br />

        <button type="submit" onClick={saveTodo}>Add Task</button>

    </div>
  )
}

export default CreateTodo