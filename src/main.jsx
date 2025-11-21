import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "flowbite-react";
import { BrowserRouter } from "react-router";
import Pageable from "./Pageable.jsx";
import ListingTypeContextProvider from "./context/ListingTypeContext.jsx";

const customTheme = createTheme({});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <BrowserRouter>
      <ListingTypeContextProvider>
        <App />
      </ListingTypeContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);
