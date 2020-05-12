import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  console.log(props.state.list);
  return (
    <ul>
      {props.state.list.map((item) => (
        <TodoCard
          key={item.id}
          item={item}
          dispatch={props.dispatch}
          //   completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
