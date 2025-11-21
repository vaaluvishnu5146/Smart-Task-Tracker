import React, { useContext } from "react";
import ToggleListing from "../components/ToggleListing/ToggleListing";
import { ListingTypeContext } from "../context/ListingTypeContext";
import { HideFunctionalityContext } from "../context/HideFunctionalities";

export default function Archive() {
  const { hideInfo = {} } = useContext(HideFunctionalityContext);
  const { isListlayout, toggleLayout } = useContext(ListingTypeContext);
  return (
    <div className="h-full bg-zinc-100 px-[50px] py-[20px] box-border">
      <p>{hideInfo["showTaskInput"]}</p>
    </div>
  );
}
