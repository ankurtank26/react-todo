import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";
const initialState = {
  tasks: [
    { id: 1, title: "Sample Task 1", date: "12/06/2021", status: "active" },
    { id: 2, title: "My Task", date: "12/06/2021", status: "active" },
    { id: 3, title: "Groceries", date: "12/06/2021", status: "inactive" },
    { id: 4, title: "Yo yo", date: "12/06/2021", status: "inactive" },
    { id: 5, title: "NEW TASK", date: "12/06/2021", status: "inactive" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
