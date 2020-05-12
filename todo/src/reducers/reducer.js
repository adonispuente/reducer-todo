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
        list: [
          ...state.list,
          { item: action.payload, completed: false, id: Date.now() },
        ],
      };

    case "COMPLETE":
      Array = Array.map((item) => {
        if (item.id === action.payload) item.completed = !item.completed;

        return item;
      });
      return {
        list: [...Array],
      };

    case "CLEAR":
      Array = Array.filter((item) => !item.completed);
      // return Array
      return {
        list: [...Array],
      };
  }

  return state;
};
