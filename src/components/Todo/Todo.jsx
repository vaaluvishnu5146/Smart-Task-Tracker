import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TodoCard from "./TodoList";
import ListRender from "./ListRender";
import GridRender from "./GridRender";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [layoutType, setLayoutType] = useState("list"); // list or grid

  function saveTodo(e) {
    let data = {};
    if (e.code == "Enter" && todo.trim().length > 0) {
      data = {
        id: uuidv4(),
        title: todo.trim(),
        isCompleted: false,
      };
      const todosCopy = [...todos, data];
      setTodos(todosCopy);
      setTodo("");
    }
  }

  function handleCompletionChange(e) {
    const todosCopy = [...todos];
    todosCopy.map((todo) => {
      if (todo.id === e.target.id) {
        todo.isCompleted = e.target.checked;
      }
      return todo;
    });
    setTodos(todosCopy);
  }

  function handleDelete(e) {
    const todosCopy = [...todos].filter((todo) => todo.id != e.target.id);
    setTodos(todosCopy);
  }

  function toggleLayout(e) {
    setLayoutType(e.target.id);
  }

  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <div className="h-[20%] flex items-center justify-center" id="todoForm">
        <TextInput
          id="taskInput1"
          placeholder="Enter your new task"
          cb={setTodo}
          onSubmit={saveTodo}
          value={todo}
        />
      </div>
      <div className="w-full h-[10%] flex items-center justify-end gap-x-3">
        <button
          className={`w-[35px] h-[35px] rounded cursor-pointer shadow-2xs ${
            layoutType === "list" ? "bg-purple-300" : "bg-white"
          }`}
          id="list"
          onClick={toggleLayout}
        >
          <i class="fa-solid fa-list"></i>
        </button>
        <button
          className={`w-[35px] h-[35px] rounded cursor-pointer shadow-2xs bg-purple-300  ${
            layoutType === "grid" ? "bg-purple-300" : "bg-white"
          }`}
          id="grid"
          onClick={toggleLayout}
        >
          <i class="fa-solid fa-table-cells-large"></i>
        </button>
      </div>
      <div
        className="w-full h-[70%] flex flex-col items-center"
        id="todoListing"
      >
        {layoutType == "list" ? (
          <ListRender
            data={todos}
            handleDelete={handleDelete}
            handleCompletionChange={handleCompletionChange}
          />
        ) : (
          <GridRender
            data={todos}
            handleDelete={handleDelete}
            handleCompletionChange={handleCompletionChange}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
