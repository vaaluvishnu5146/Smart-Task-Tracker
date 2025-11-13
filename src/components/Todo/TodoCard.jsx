import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";

export default function TodoCard({
  id,
  title = "",
  isCompleted = false,
  handleCompletion = () => {},
  handleDelete = () => {},
}) {
  return (
    <div id={id} className="bg-white rounded h-auto p-3 box-border">
      <Checkbox
        id={id}
        type="checkbox"
        onChange={handleCompletion}
        checked={isCompleted}
      />
      <p className="mb-2">{title}</p>
      <div className="flex justify-end">
        <button
          className="w-[50px] h-[50px] bg-transparent"
          id={id}
          onClick={handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
