import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React seekhna" },
    { id: 2, text: "Project banana" },
    { id: 3, text: "Git push karna" },
  ]);

  return (
    <div style={{
      fontFamily: "sans-serif",
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
