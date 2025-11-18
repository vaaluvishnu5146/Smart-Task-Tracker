import React from "react";

export default function ColorPicker({
  color = "",
  handleColorPicker = () => {},
}) {
  return (
    <div className="flex h-full items-center gap-x-3" id="colorPicker">
      <span
        id="bg-white"
        onClick={handleColorPicker}
        className="w-[35px] h-[35px] rounded-full flex justify-center items-center border border-black cursor-pointer"
      >
        {color === "bg-white" && <i class="fa-solid fa-check"></i>}
      </span>
      <span
        id="bg-blue-200"
        onClick={handleColorPicker}
        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-blue-200 border-2 border-blue-500 cursor-pointer"
      >
        {color === "bg-blue-200" && <i class="fa-solid fa-check"></i>}
      </span>
      <span
        id="bg-yellow-200"
        onClick={handleColorPicker}
        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-yellow-200 border-2 border-yellow-500 cursor-pointer"
      >
        {color === "bg-yellow-200" && <i class="fa-solid fa-check"></i>}
      </span>
      <span
        id="bg-red-200"
        onClick={handleColorPicker}
        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-red-200 border-2 border-red-500 cursor-pointer"
      >
        {color === "bg-red-200" && <i class="fa-solid fa-check"></i>}
      </span>
      <span
        id="bg-orange-200"
        onClick={handleColorPicker}
        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-orange-200 border-2 border-orange-500 cursor-pointer"
      >
        {color === "bg-orange-200" && <i class="fa-solid fa-check"></i>}
      </span>
    </div>
  );
}
