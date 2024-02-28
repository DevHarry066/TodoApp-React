export function Todos({ todos }) {
  const onCompleted = (id) => {
    fetch(`http://localhost:3000/completed/${id}`, {
      method: 'PUT',
      body: JSON.stringify({completed: true}),
      headers: {'Content-Type': 'application/json'},
    });
  

  }
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button disabled={todo.completed}
          onClick={() => onCompleted(todo._id)}
          >{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
        </div>
      ))}
    </div>
  );
}
export default Todos;
