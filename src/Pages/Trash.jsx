import React, { useEffect, useState, useContext } from "react";
import { ListingTypeContext } from "../context/ListingTypeContext";

export default function Trash() {
  const { isListlayout, toggleLayout } = useContext(ListingTypeContext);
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
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border"></div>
  );
}
