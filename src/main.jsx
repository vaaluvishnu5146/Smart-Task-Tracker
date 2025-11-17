import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Parent from "./Parent.jsx";
import Todo from "./components/Todo/Todo.jsx";

createRoot(document.getElementById("root")).render(<Todo />);
