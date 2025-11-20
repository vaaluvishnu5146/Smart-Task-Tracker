import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import TextInput from "../TextInput/TextInput";
import ListRender from "./ListRender";
import GridRender from "./GridRender";
import { EditModal } from "../Modal/EditModal";
import { Axios } from "axios";

function Todo() {
  const HttpClient = new Axios();
  const [updateId, setUpdateId] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("bg-white");
  const [tag, setTag] = useState("personal");
  const [layoutType, setLayoutType] = useState("list"); // list or grid
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    // FETCH doing GET method
    HttpClient.get(`http://localhost:3000/todos`)
      .then((response) => {
        if (response) {
          const { data = [] } = JSON.parse(response.data);
          setTodos(data);
        }
      })
      .catch((e) => console.log(e));
  }

  function saveTodo(e) {
    let data = {};
    if (e.code == "Enter" && todo.trim().length > 0) {
      data = {
        title: todo.trim(),
        color: color,
        tag: tag,
        isDeleted: false,
        isArchived: false,
        isCompleted: false,
        userId: "6815b6d9a95876b0ab5168df",
      };

      // Fire POST request and store the data in db
      fetch(`http://localhost:3000/todos/createTodo`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            fetchTodos();
          }
        })
        .catch((error) => {
          console.log(error);
        });
      resetFormState();
    }
  }

  function handleCompletionChange(e) {
    // Fire PATCH request and store the data in db
    fetch(`http://localhost:3000/todos/updateTodo/${e.target.id}`, {
      method: "PATCH",
      body: JSON.stringify({ isCompleted: e.target.checked }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(e) {
    // Fire PATCH request and store the data in db
    fetch(`http://localhost:3000/todos/updateTodo/${e.target.id}`, {
      method: "PATCH",
      body: JSON.stringify({ isDeleted: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
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
    let matchingTask = todos.find((e) => e._id == updateId);

    if (matchingTask) {
      // Fire PATCH request and store the updated todo data in db
      fetch(`http://localhost:3000/todos/updateTodo/${updateId}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...matchingTask,
          title: todo,
          tag: tag,
          color: color,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            fetchTodos();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          resetFormState();
        });
    } else {
      console.log("No Todo Selected");
    }
  }

  function resetFormState() {
    setOpenModal(false);
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
        <Button
          color={"alternative"}
          className={`rounded cursor-pointer shadow-2xs ${
            layoutType === "list" ? "bg-purple-300" : "bg-white"
          }`}
          id="list"
          onClick={toggleLayout}
        >
          <i class="fa-solid fa-list"></i>&nbsp;&nbsp;List
        </Button>
        <Button
          color={"alternative"}
          className={`rounded cursor-pointer shadow-2xs ${
            layoutType === "grid" ? "bg-purple-300" : "bg-white"
          }`}
          id="grid"
          onClick={toggleLayout}
        >
          <i class="fa-solid fa-table-cells-large"></i>&nbsp;&nbsp;Grid
        </Button>
      </div>
      <div
        className="w-full h-[70%] flex flex-col items-center"
        id="todoListing"
      >
        {layoutType == "list" ? (
          <ListRender
            data={todos.filter((e) => !e.isDeleted)}
            handleDelete={handleDelete}
            handleCompletionChange={handleCompletionChange}
            onEdit={(id) => {
              const matchingTask = todos.find((e) => e._id == id);
              setUpdateId(matchingTask._id);
              setOpenModal(!openModal);
              setTodo(matchingTask.title);
              setTag(matchingTask.tag);
              setColor(matchingTask.color);
            }}
          />
        ) : (
          <GridRender
            data={todos.filter((e) => !e.isDeleted)}
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
