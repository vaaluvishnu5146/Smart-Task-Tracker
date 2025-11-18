import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "flowbite-react";

const customTheme = createTheme({});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);
