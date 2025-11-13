import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  return (
    <section className="w-screen h-screen flex">
      <div className="w-[20%]">
        <div className="w-full h-[10%]">Logo</div>
        <div className="w-full h-[80%]">
          <ul>
            <li className="cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5 bg-purple-300">
              <i class="fa-solid fa-list-check"></i>
              <p>Action Items</p>
            </li>
            <li className="cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5">
              <i class="fa-solid fa-box-archive"></i>
              <p>Archive</p>
            </li>
            <li className="cursor-pointer flex h-[50px] p-5 box-border items-center gap-x-5">
              <i class="fa-solid fa-trash"></i>
              <p>Trash</p>
            </li>
          </ul>
        </div>
        <div className="w-full h-[10%]">Settings</div>
      </div>
      <div className="w-[80%]">
        <Todo />
      </div>
    </section>
  );
}

export default App;
