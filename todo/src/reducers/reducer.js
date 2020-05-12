export const initialState = {
  list: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const reducer = (state, action) => {
  let Array = [...state.list];

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [
          ...state.list,
          { item: action.payload, completed: false, id: Date.now() },
        ],
      };

    case "COMPLETE":
      // const updatedTodos = state.list.map((item) => {
      //   if (action.payload === item.id) {
      //     const updatedTodo = { ...item, completed: !item.completed };
      //     return updatedTodo;
      //   }
      //   return item;
      // });
      // return {
      //   ...state,
      //   list: updatedTodos,
      // };

      return {
        ...state,
        list: Array.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    // console.log("entering complete block");
    // const newArray = Array.map((item) => {
    //   if (item.id === action.payload) {
    //     item.completed = !item.completed;

    //     return item;
    //   }
    //   return item;
    // });
    // return {
    //   list: [...newArray],
    // };

    case "CLEAR":
      Array = Array.filter((item) => !item.completed);
      // return Array
      return {
        list: [...Array],
      };
  }

  return state;
};
