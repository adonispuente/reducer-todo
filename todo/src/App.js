import React, { useReducer } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
