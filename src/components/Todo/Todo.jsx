import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TodoCard from "./TodoCard";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

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

  return (
    <section className="w-screen h-screen bg-blue-400">
      <div className="h-[30%] flex items-center justify-center" id="todoForm">
        <TextInput
          id="taskInput1"
          placeholder="Enter your new task"
          cb={setTodo}
          onSubmit={saveTodo}
          value={todo}
        />
      </div>
      <div className="h-[70%] flex flex-col items-center" id="todoListing">
        <div className="w-[50%] h-auto mb-5" id="todoSection">
          <h3 className="text-italic mb-3">Todo</h3>
          <div className="flex flex-col gap-y-3" id="todoItems">
            {todos
              .filter((el) => el.isCompleted == false)
              .map((el) => (
                <TodoCard
                  id={el.id}
                  key={el.id}
                  title={el.title}
                  isCompleted={el.isCompleted}
                  handleCompletion={handleCompletionChange}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
        </div>
        <div className="w-[50%] h-auto" id="completedSection">
          <h3 className="text-italic mb-3">Completed</h3>
          <div className="flex flex-col gap-y-3" id="completedItems">
            {todos
              .filter((el) => el.isCompleted == true)
              .map((el) => (
                <TodoCard
                  id={el.id}
                  key={el.id}
                  title={el.title}
                  isCompleted={el.isCompleted}
                  handleCompletion={handleCompletionChange}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todo;
