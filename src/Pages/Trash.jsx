import React, { useEffect, useState } from "react";
import { retreiveActionItemsFromLocalStorage } from "../utils/localstorageSync";
import ListRender from "../components/Todo/ListRender";

export default function Trash() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    // FETCH doing GET method
    fetch(`http://localhost:3000/todos?isDeleted=true`)
      .then((response) => response.json())
      .then((result) => setTodos(result.data))
      .catch((e) => console.log(e));
  }
  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <ListRender data={todos.filter((e) => e.isDeleted)} item={"B"} />
    </div>
  );
}
