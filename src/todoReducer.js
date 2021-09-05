const INITIAL_STATE = {
  todoList: [],
};

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "todoAdd":
      return {
        ...state,
        todoList: [...state.todoList, { ...action.payload }],
      };
    case "todoDelete":
      console.log(action);
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.payload.id),
      };
    case "todoEdit":
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.payload.id ? { ...t, isEditing: true } : { ...t }
        ),
      };
    case "todoUpdate":
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.payload.id ? { ...action.payload } : t
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
