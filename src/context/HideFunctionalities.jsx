import React, { createContext, useState } from "react";

export const HideFunctionalityContext = createContext({
  hideInfo: {},
});

export default function HideFunctionalitiesProvider({ children }) {
  const [hideInfo, setHideInfo] = useState({
    showTaskInput: false,
  });

  return (
    <HideFunctionalityContext value={{ hideInfo }}>
      {children}
    </HideFunctionalityContext>
  );
}
