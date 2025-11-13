import React from "react";
import TodoCard from "./TodoCard";
import NoActionItem from "./NoActionItem";

export default function GridRender({
  data = [],
  handleCompletionChange = () => {},
  handleDelete = () => {},
}) {
  return (
    <section className="w-full">
      {data.length > 0 ? (
        <>
          <h2 className="mb-3">Todo</h2>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {data
              .filter((el) => el.isCompleted == false)
              .map((el) => (
                <TodoCard
                  id={el.id}
                  key={el.id}
                  title={el.title}
                  isCompleted={el.isCompleted}
                  handleCompletion={handleCompletionChange}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
          <h2 className="mb-3">Completed</h2>
          <div className="grid grid-cols-4 gap-3">
            {data
              .filter((el) => el.isCompleted != false)
              .map((el) => (
                <TodoCard
                  id={el.id}
                  key={el.id}
                  title={el.title}
                  isCompleted={el.isCompleted}
                  handleCompletion={handleCompletionChange}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
        </>
      ) : (
        <NoActionItem />
      )}
    </section>
  );
}
