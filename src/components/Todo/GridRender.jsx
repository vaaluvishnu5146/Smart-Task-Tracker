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
          <h2 className="mb-3">Action Items</h2>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {data.map((el) => (
              <TodoCard
                id={el._id}
                key={el._id}
                title={el.title}
                isCompleted={el.isCompleted}
                handleCompletion={handleCompletionChange}
                handleDelete={handleDelete}
                color={el.color}
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
