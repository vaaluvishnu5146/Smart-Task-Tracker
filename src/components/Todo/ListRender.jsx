import React from "react";
import TodoListItem from "./TodoList";
import NoActionItem from "./NoActionItem";
import ListTrashItem from "./ListTrashItem";

export default function ListRender({
  data = [],
  handleCompletionChange = () => {},
  handleDelete = () => {},
  onEdit = () => {},
  item = "A",
}) {
  return (
    <section className="w-full">
      {data.length > 0 ? (
        <>
          <div className="h-auto mb-5" id="todoSection">
            <h3 className="text-italic mb-3">Action Items</h3>
            <div className="flex flex-col gap-y-3" id="todoItems">
              {data.map((el) => {
                if (item == "A") {
                  return (
                    <TodoListItem
                      id={el._id}
                      key={el._id}
                      title={el.title}
                      isCompleted={el.isCompleted}
                      handleCompletion={handleCompletionChange}
                      handleDelete={handleDelete}
                      color={el.color}
                      tag={el.tag}
                      onEdit={onEdit}
                    />
                  );
                } else {
                  return (
                    <ListTrashItem
                      id={el._id}
                      key={el._id}
                      title={el.title}
                      tag={el.tag}
                    />
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : (
        <NoActionItem />
      )}
    </section>
  );
}
