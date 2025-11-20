import React from "react";
import Badge from "../../Elements/Badge/Badge";

export default function ListTrashItem({
  id = "",
  color = "",
  isCompleted = false,
  tag = "",
  title = "",
  handleDelete = () => {},
  handleUnDelete = () => {},
}) {
  return (
    <div
      className={`w-full h-[50px] rounded px-5 box-border flex gap-x-5 items-center justify-between ${
        color || "bg-white"
      }`}
    >
      <div className="flex gap-x-4">
        <p className={isCompleted ? "line-through" : ""}>{title}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Badge tagSelected={null} label={tag} />
        <button
          className="w-[50px] h-[50px] bg-transparent"
          id={id}
          onClick={handleUnDelete}
        >
          <i class="fa-solid fa-trash-arrow-up"></i>
        </button>
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
