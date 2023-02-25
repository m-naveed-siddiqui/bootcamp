import { useState, useEffect } from 'react';
import './App.css'

const textCss = {
  border: "2px solid #000",
  width: "200px",
  padding: "5px",
  "border-radius": "2px",
  margin: "5px"
};
const taskCountCss = {
  margin: '10px',
}

// function App() {
const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [pendingTaskCount, setPendingTaskCount] = useState(0);

  const handleClick = () => {
    if (input) {
      const id = todoList.length+1;
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
        },
      ]);
      setInput("");
    }
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete) {
          setCompletedTaskCount(completedTaskCount+1);
          setPendingTaskCount(pendingTaskCount-1);
        } else {
          setCompletedTaskCount(completedTaskCount-1);
          setPendingTaskCount(pendingTaskCount+1);
        }
        item = {...task, complete: !task.complete}
      }
      else {
        item = {...task};
      }
      return item;
    });
    setTodoList(list);
  };

  const search = (e) => {
    setInput(e.target.value);
    useEffect(() => {
      
    });
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={input} onInput={search} style={textCss}/>
      <button onClick={handleClick}>Add</button>
      <div>
        <span style={taskCountCss}>
          <strong>Pending Tasks</strong> {todoList.length + pendingTaskCount}
        </span>
        <span style={taskCountCss}>
          <strong>Completed Tasks</strong> {completedTaskCount}
        </span>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <li complete={todo.complete} id={todo.id} key={todo.id} onClick={() => handleComplete(todo.id)}
                style={{
                  listStyle: "none",
                  textDecoration: todo.complete && "line-through",
                }}>
                  {todo.task}
                </li>
            );
          })}
        </ul>
      </div>
      <button>Clear</button>
    </div>
  )
}

export default App
