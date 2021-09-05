import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todoList = useSelector((store) => store.todoList);

  return (
    <div>
      {todoList.map((t) => (
        <Todo key={t.id} id={t.id} task={t.task} isEditing={t.isEditing} />
      ))}
    </div>
  );
}

export default TodoList;
