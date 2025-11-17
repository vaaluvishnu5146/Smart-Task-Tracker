import React from "react";
import Badge from "../../Elements/Badge/Badge";

export default function TextInput(props) {
  return (
    <div className="w-full h-auto bg-white rounded px-5 py-3 box-border shadow-2xs">
      <input
        id={props.id}
        className="w-full h-[50px]"
        placeholder={props.placeholder}
        onChange={(e) => props.cb(e.target.value)}
        onKeyDown={props.onSubmit}
        value={props.value}
      />
      <div className="flex h-[50px] gap-x-5">
        <div className="flex h-full items-center gap-x-3" id="colorPicker">
          <span
            id="bg-white"
            onClick={props.handleColorPicker}
            className="w-[35px] h-[35px] rounded-full flex justify-center items-center border border-black cursor-pointer"
          >
            {props.color === "bg-white" && <i class="fa-solid fa-check"></i>}
          </span>
          <span
            id="bg-blue-200"
            onClick={props.handleColorPicker}
            className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-blue-200 border-2 border-blue-500 cursor-pointer"
          >
            {props.color === "bg-blue-200" && <i class="fa-solid fa-check"></i>}
          </span>
          <span
            id="bg-yellow-200"
            onClick={props.handleColorPicker}
            className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-yellow-200 border-2 border-yellow-500 cursor-pointer"
          >
            {props.color === "bg-yellow-200" && (
              <i class="fa-solid fa-check"></i>
            )}
          </span>
          <span
            id="bg-red-200"
            onClick={props.handleColorPicker}
            className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-red-200 border-2 border-red-500 cursor-pointer"
          >
            {props.color === "bg-red-200" && <i class="fa-solid fa-check"></i>}
          </span>
          <span
            id="bg-orange-200"
            onClick={props.handleColorPicker}
            className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-orange-200 border-2 border-orange-500 cursor-pointer"
          >
            {props.color === "bg-orange-200" && (
              <i class="fa-solid fa-check"></i>
            )}
          </span>
        </div>
        <div className="flex h-full items-center gap-x-3" id="tagPicker">
          <span>
            <Badge
              id="personal"
              label="Personal"
              tagSelected={props.tagSelected}
              handleTagCheck={props.handleTagCheck}
            />
          </span>
          <span>
            <Badge
              id="official"
              label="Official"
              tagSelected={props.tagSelected}
              handleTagCheck={props.handleTagCheck}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
