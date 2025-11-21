import React, { useContext, useState } from "react";
import ListRender from "../components/Todo/ListRender";
import { useEffect } from "react";
import ToggleListing from "../components/ToggleListing/ToggleListing";
import { ListingTypeContext } from "../context/ListingTypeContext";

export default function Cloud() {
  const [todos, setTodos] = useState([]);
  const { isListlayout, toggleLayout } = useContext(ListingTypeContext);

  useEffect(() => {
    // FETCH doing GET method
    fetch(`http://localhost:3000/todos`)
      .then((response) => response.json())
      .then((result) => setTodos(result.data));
  }, []);

  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <ListRender data={todos} />
    </div>
  );
}
