import React from "react";

export default function TextInput(props) {
  return (
    <input
      id={props.id}
      className="w-full h-[50px] bg-white rounded px-5 box-border shadow-2xs"
      placeholder={props.placeholder}
      onChange={(e) => props.cb(e.target.value)}
      onKeyDown={props.onSubmit}
      value={props.value}
    />
  );
}
