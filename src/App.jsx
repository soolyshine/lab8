import { useState } from "react";
import Form from "./todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div key={i}>
            <span
              onClick={() => toggleComplete(i)}
              style={{
                textDecoration: complete ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {text}
            </span>
            <button
              onClick={() =>
                setTodos(todos.filter((_, k) => k !== i))
              }
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
