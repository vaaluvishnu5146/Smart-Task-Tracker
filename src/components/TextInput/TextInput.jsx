import React from "react";
import Badge from "../../Elements/Badge/Badge";
import ColorPicker from "../ColorPicker/ColorPicker";

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
        <ColorPicker
          color={props.color}
          handleColorPicker={props.handleColorPicker}
        />
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
