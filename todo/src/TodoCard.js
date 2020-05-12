import React from "react";

const TodoCard = ({ item, dispatch }) => {
  return (
    <li
      className={`${item.completed ? "completed" : ""}`}
      onClick={() => dispatch({ type: "COMPLETE", payload: item.id })}
    >
      {item.item}
    </li>
  );
};

export default TodoCard;
