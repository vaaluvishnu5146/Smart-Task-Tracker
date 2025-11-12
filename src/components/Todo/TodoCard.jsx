import React from "react";

export default function TodoCard(props) {
  return (
    <div className="w-full h-[50px] bg-white rounded px-5 box-border flex gap-x-5 items-center justify-between">
      <div className="flex gap-x-4">
        <input
          id={props.id}
          type="checkbox"
          onChange={props.handleCompletion}
          checked={props.isCompleted}
        />
        <p className={props.isCompleted ? "line-through" : ""}>{props.title}</p>
      </div>
      <div>
        <button
          className="w-[50px] h-[50px] bg-transparent"
          id={props.id}
          onClick={props.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
