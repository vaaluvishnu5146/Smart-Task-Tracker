import React from "react";

export default function TextInput(props) {
  return (
    <input
      id={props.id}
      className="w-[50%] h-[50px] bg-white rounded px-5 box-border"
      placeholder={props.placeholder}
      onChange={(e) => props.cb(e.target.value)}
      onKeyDown={props.onSubmit}
      value={props.value}
    />
  );
}
