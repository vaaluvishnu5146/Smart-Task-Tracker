import React from "react";

export default function Checkbox({
  id = "",
  label = "",
  checked = false,
  onChange = () => {},
}) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none h-5 w-5 border-2 border-black rounded-md checked:bg-purple-400 checked:border-purple-500"
      />
      <span className="relative">
        {/* <!-- Custom checkmark (e.g., SVG or pseudo-element) --> */}
        <svg
          className="h-4 w-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden checked:block pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span>{label}</span>
    </label>
  );
}
