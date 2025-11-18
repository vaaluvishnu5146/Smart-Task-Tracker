import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import Badge from "../../Elements/Badge/Badge";

export default function TodoListItem(props) {
  return (
    <div
      className={`w-full h-[50px] rounded px-5 box-border flex gap-x-5 items-center justify-between ${
        props?.color ? props.color : "bg-white"
      }`}
    >
      <div className="flex gap-x-4">
        <Checkbox
          id={props.id}
          onChange={props.handleCompletion}
          checked={props.isCompleted}
          className="checked:bg-purple-400"
        />

        <p className={props.isCompleted ? "line-through" : ""}>{props.title}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Badge tagSelected={null} label={props.tag} />
        <button
          className="w-[50px] h-[50px] bg-transparent"
          id={props.id}
          onClick={() => props.onEdit(props.id)}
        >
          <i class="fa-solid fa-pencil"></i>
        </button>
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
