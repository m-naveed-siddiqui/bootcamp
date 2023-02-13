import React, { useState } from "react";
import data from "./data.json";
// components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Create from "./components/Create";
import Search from "./components/Search";
import { Counter } from "./features/counter/Counter";

import "./App.css";

function App() {
    const [toDoList, setToDoList] = useState(data);
    const [search, setSearch] = useState('');
    const [newTask, setNewTask] = useState('');

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    };

    const addTask = () => {
        setToDoList((prev) => [
            ...prev,
            {
                id: toDoList.length + 1,
                task: newTask,
                complete: false
            }
        ]);
        setNewTask('');
    }
    
    const findWord = toDoList.filter(i => i.task.includes(search));

    return (
        <div className="App">
            <Header />
            <Search setSearch={setSearch} />
            <ToDoList toDoList={findWord} handleToggle={handleToggle} />
            <Create newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
            <Counter />
        </div>
    );
}

export default App;