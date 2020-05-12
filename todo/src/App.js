import React, { useReducer, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const toggleTodo = (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  };
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <TodoList
        state={state.list}
        // dispatch={dispatch}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
