import axios from "axios";

const initialValue = {
  todos: [],
  isLoading: false,
  error: "",
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_TODO":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}
function startFetching() {
  return {
    type: "START_FETCHING",
  };
}

function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data,
  };
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(startFetching());

    const { data } = await axios(
      "https://6430ebe0d4518cfb0e576b1a.mockapi.io/todo"
    );
    dispatch(successGetTodo(data));
  };
}

export function addTodo(newTodo) {
  return async function (dispatch) {
    dispatch(startFetching());

    await axios.post(
      "https://6430ebe0d4518cfb0e576b1a.mockapi.io/todo",
      newTodo
    );

    dispatch(getTodo());
  };
}

export function deleteTodo(id) {
  return async function (dispatch) {
    dispatch(startFetching());
    await axios.delete(
      `https://6430ebe0d4518cfb0e576b1a.mockapi.io/todo/${id}`
    );
    dispatch(getTodo());
  };
}

export function updateTodoStatus(id, newStatus) {
  return async function (dispatch) {
    dispatch(startFetching());
    try {
      await axios.put(
        `https://6430ebe0d4518cfb0e576b1a.mockapi.io/todo/${id}`,
        { checked: newStatus }
      );
      dispatch(getTodo());
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };
}

export function updateTodo(id, newVlues) {
  return async function (dispatch) {
    dispatch(startFetching());
    try {
      await axios.put(
        `https://6430ebe0d4518cfb0e576b1a.mockapi.io/todo/${id}`,
        { value: newVlues }
      );
      dispatch(getTodo());
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };
}

export default todoReducer;
