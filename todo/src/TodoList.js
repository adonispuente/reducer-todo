import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  //   console.log(props.state.list);
  return (
    <ul>
      {props.state.map((item) => (
        <TodoCard
          key={item.id}
          item={item}
          //   dispatch={props.dispatch}
          toggleTodo={props.toggleTodo}
          //   completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
