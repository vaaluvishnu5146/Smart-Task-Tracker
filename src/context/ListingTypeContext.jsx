import React, { createContext, useContext, useState } from "react";

export const ListingTypeContext = createContext({
  isListlayout: "list",
  toggleLayout: () => {},
});

export default function ListingTypeContextProvider({ children }) {
  const [isListlayout, setIsListlayout] = useState(false); // list or grid

  function toggleLayout(e) {
    setIsListlayout(!isListlayout);
  }

  return (
    <ListingTypeContext
      value={{
        isListlayout,
        toggleLayout,
      }}
    >
      {children}
    </ListingTypeContext>
  );
}
