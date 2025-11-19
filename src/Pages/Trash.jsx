import React, { useEffect, useState } from "react";
import { retreiveActionItemsFromLocalStorage } from "../utils/localstorageSync";
import ListRender from "../components/Todo/ListRender";

export default function Trash() {
  const [deletedItems, setDeletedItems] = useState([]);
  useEffect(() => {
    let todos = retreiveActionItemsFromLocalStorage();
    if (todos) {
      todos = todos.filter((e) => e.isDeleted);
      setDeletedItems(todos);
    }
  }, []);
  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <ListRender data={deletedItems} />
    </div>
  );
}
