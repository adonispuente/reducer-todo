import React from "react";

const TodoCard = ({ item, toggleTodo }) => {
  return (
    <li
      className={`${item.completed ? "completed" : ""}`}
      onClick={() => toggleTodo(item.id)}
    >
      {item.item}
    </li>
  );
};

export default TodoCard;
