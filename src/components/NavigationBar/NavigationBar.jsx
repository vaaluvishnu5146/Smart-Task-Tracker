import React, { useContext } from "react";
import ToggleListing from "../ToggleListing/ToggleListing";
import { ListingTypeContext } from "../../context/ListingTypeContext";

export default function NavigationBar() {
  const { isListlayout, toggleLayout } = useContext(ListingTypeContext);
  return (
    <div className="w-screen h-[60px] bg-white shadow-md grid grid-cols-3">
      <div></div>
      <div></div>
      <div className="flex items-center">
        <ToggleListing layoutType={isListlayout} toggleLayout={toggleLayout} />
      </div>
    </div>
  );
}
