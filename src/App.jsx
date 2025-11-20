import { Routes, Route, NavLink } from "react-router";
import Todo from "./components/Todo/Todo";
import "./App.css";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import Cloud from "./Pages/Cloud";

function App() {
  return (
    <section className="w-screen h-screen flex">
      <div className="w-[20%]">
        <div className="w-full h-[10%]">Logo</div>
        <div className="w-full h-[80%]">
          <ul>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5 bg-purple-300"
                  : "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5"
              }
              to={"/"}
            >
              <i class="fa-solid fa-list-check"></i>
              <p>Action Items</p>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5 bg-purple-300"
                  : "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5"
              }
              to={"/archive"}
            >
              <i class="fa-solid fa-box-archive"></i>
              <p>Archive</p>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5 bg-purple-300"
                  : "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5"
              }
              to={"/trash"}
            >
              <i class="fa-solid fa-trash"></i>
              <p>Trash</p>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5 bg-purple-300"
                  : "cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5"
              }
              to={"/cloud"}
            >
              <i class="fa-solid fa-trash"></i>
              <p>Cloud</p>
            </NavLink>
          </ul>
        </div>
        <div className="w-full h-[10%]">Settings</div>
      </div>
      <div className="w-[80%]">
        <Routes>
          <Route index element={<Todo />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
          <Route path="cloud" element={<Cloud />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
