import React, { useState, useRef } from "react";

export default function MiniTodo() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  function handleSave(e) {
    console.log(inputRef);
    const input = inputRef.current;
    if (input.value.length > 0) {
      setTasks([...tasks, input.value]);
      input.value = "";
    } else {
      console.log("Input is empty");
    }
  }

  return (
    <div>
      <div>
        <input ref={inputRef} id="task" placeholder="Enter your task" />
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li id={index} key={task}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
