import { Button } from "flowbite-react";
import React from "react";

export default function ToggleListing({
  layoutType = "list",
  toggleLayout = () => {},
}) {
  return (
    <Button
      className="w-[50px] h-[50px] rounded-full"
      color={"alternative"}
      onClick={toggleLayout}
    >
      {layoutType ? (
        <i class="fa-solid fa-table-cells-large"></i>
      ) : (
        <i class="fa-solid fa-list"></i>
      )}
    </Button>
  );
}
