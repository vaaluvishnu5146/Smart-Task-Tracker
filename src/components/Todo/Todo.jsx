import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TodoCard from "./TodoList";
import ListRender from "./ListRender";
import GridRender from "./GridRender";
import { EditModal } from "../Modal/EditModal";

function Todo() {
  const [updateId, setUpdateId] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("bg-white");
  const [tag, setTag] = useState("personal");
  const [layoutType, setLayoutType] = useState("list"); // list or grid
  const [openModal, setOpenModal] = useState(false);

  function saveTodo(e) {
    let data = {};
    if (e.code == "Enter" && todo.trim().length > 0) {
      data = {
        id: uuidv4(),
        title: todo.trim(),
        isCompleted: false,
        color,
        tag: tag,
        createdAt: new Date(),
      };
      const todosCopy = [...todos, data];
      setTodos(todosCopy);
      resetFormState();
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

  function handleColorPicker(e) {
    if (e.target.id != "" && e.target.id != null) {
      setColor(e.target.id);
    }
  }

  function handleTagCheck(e) {
    console.log(e);
    if (e.target.id != "" && e.target.id != null) {
      setTag(e.target.id);
    }
  }

  function handleUpdateTask(e) {
    const updatedTodos = todos.map((e) => {
      if (e.id == updateId) {
        const updatedTask = {
          ...e,
          title: todo,
          tag: tag,
          color: color,
        };
        return updatedTask;
      }
      return e;
    });
    setTodos(updatedTodos);
    resetFormState();
  }

  function resetFormState() {
    setUpdateId(null);
    setTodo("");
    setColor("bg-white");
    setTag("personal");
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
          handleColorPicker={handleColorPicker}
          color={color}
          handleTagCheck={handleTagCheck}
          tagSelected={tag}
        />
      </div>
      <div className="w-full h-[10%] flex items-center justify-end gap-x-3">
        <EditModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          handleColorPicker={handleColorPicker}
          color={color}
          handleTagCheck={handleTagCheck}
          tagSelected={tag}
          task={todo}
          handleUpdate={handleUpdateTask}
        />
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
            onEdit={(id) => {
              const matchingTask = todos.find((e) => e.id == id);
              setUpdateId(matchingTask.id);
              setOpenModal(!openModal);
              setTodo(matchingTask.title);
              setTag(matchingTask.tag);
              setColor(matchingTask.color);
            }}
          />
        ) : (
          <GridRender
            data={todos}
            handleDelete={handleDelete}
            handleCompletionChange={handleCompletionChange}
            onEdit={setOpenModal}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
