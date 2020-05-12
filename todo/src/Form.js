import React, { useState } from "react";

const Form = (props) => {
  const [newItem, setNewItem] = useState("");

  const ChangeHandeler = (e) => {
    setNewItem(e.target.value);
  };

  const SubmitHandeler = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD", payload: newItem });
    setNewItem("");
  };
  return (
    <div>
      <form onSubmit={SubmitHandeler}>
        <label>
          <input
            type="text"
            onChange={ChangeHandeler}
            placeholder="todo"
            value={newItem}
          />
        </label>
        <button
        // onClick={() => {
        //   props.dispatch({ type: "ADD", payload: newItem });
        // }}
        >
          {" "}
          Add To Do items{" "}
        </button>
        <button
          onClick={() => {
            props.dispatch({ type: "CLEAR" });
          }}
        >
          {" "}
          Clear completed{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
