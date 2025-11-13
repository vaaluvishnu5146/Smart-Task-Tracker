import React from "react";
import TodoListItem from "./TodoList";
import NoActionItem from "./NoActionItem";

export default function ListRender({
  data = [],
  handleCompletionChange = () => {},
  handleDelete = () => {},
}) {
  return (
    <section className="w-full">
      {data.length > 0 ? (
        <>
          <div className="h-auto mb-5" id="todoSection">
            <h3 className="text-italic mb-3">Todo</h3>
            <div className="flex flex-col gap-y-3" id="todoItems">
              {data
                .filter((el) => el.isCompleted == false)
                .map((el) => (
                  <TodoListItem
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    isCompleted={el.isCompleted}
                    handleCompletion={handleCompletionChange}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
          <div className="h-auto" id="completedSection">
            <h3 className="text-italic mb-3">Completed</h3>
            <div className="flex flex-col gap-y-3" id="completedItems">
              {data
                .filter((el) => el.isCompleted == true)
                .map((el) => (
                  <TodoListItem
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    isCompleted={el.isCompleted}
                    handleCompletion={handleCompletionChange}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <NoActionItem />
      )}
    </section>
  );
}
