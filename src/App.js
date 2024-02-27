import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [x, setx] = useState([]);
  const inputRef = useRef();
  const addTodo = () => {
    const text = inputRef.current.value;
    const newNote = {
      text,
      completed: false,
    };
    setx([...x, newNote]);
  };
  const toggleTodo = (index) => {
    const newTodo = [...x];
    newTodo[index].completed = !newTodo[index].completed;
    setx(newTodo);
  };
  const toDelete = (index) => {
    const newx = [...x];

    newx.splice(index, 1);

    setx(newx);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {x.map((todo, index) => {
          return (
            <div className="item">
              {" "}
              <li
                className={todo.completed ? "diffstyle" : ""}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </li>
              <span onClick={() => toDelete(index)}>X</span>
            </div>
          );
        })}
      </ul>
      <input ref={inputRef} type="text" placeholder="Add Todo" />
      <button onClick={() => addTodo()} value="Add Note">
        Add Note
      </button>
    </div>
  );
}

export default App;
