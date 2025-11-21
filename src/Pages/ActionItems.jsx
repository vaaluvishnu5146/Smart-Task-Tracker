import React from "react";
import Todo from "../components/Todo/Todo";

export default function ActionItems() {
  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <h2 className="text-3xl mb-5">Action Items</h2>
      <Todo />
    </div>
  );
}
