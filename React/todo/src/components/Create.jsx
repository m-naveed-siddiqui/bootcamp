import { useState } from "react";

const Create = ({newTask,setNewTask,addTask}) => {
    return (
        <>
            <input type="text" value={newTask} onInput={(e) => {setNewTask(e.target.value)}}/>
            <button onClick={()=>{addTask()}}>Add Task</button>
        </>
    )
}

export default Create;