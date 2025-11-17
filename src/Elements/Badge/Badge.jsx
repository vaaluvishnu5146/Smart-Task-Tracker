import React from "react";

export default function Badge({
  label = "",
  color = "",
  tagSelected = "",
  id = "",
  handleTagCheck = () => {},
}) {
  return (
    <div
      id={id}
      onClick={handleTagCheck}
      className={`cursor-pointer w-auto h-[30px] rounded-md px-3 py-3 box-border flex gap-x-3 items-center justify-center ${
        color ? color : "bg-zinc-200"
      }`}
    >
      {tagSelected === id && <i class="fa-solid fa-check"></i>} {label}
    </div>
  );
}
