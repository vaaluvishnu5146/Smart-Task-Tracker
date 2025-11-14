import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";

export default function TodoCard({
  id,
  title = "",
  isCompleted = false,
  handleCompletion = () => {},
  handleDelete = () => {},
  color = "",
}) {
  return (
    <div
      id={id}
      className={`rounded h-auto p-3 box-border ${color ? color : "bg-white"}`}
    >
      <Checkbox
        id={id}
        type="checkbox"
        onChange={handleCompletion}
        checked={isCompleted}
      />
      <div className="mb-3"></div>
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
