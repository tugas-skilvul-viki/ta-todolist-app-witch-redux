import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/reducer/todoReducer";

function InputTodo(props) {
  const [input, setInput] = useState("");
  const { isLoading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [error, setError] = useState(""); // State untuk pesan kesalahan

  const handleClick = (e) => {
    e.preventDefault();

    if (input === "") {
      setError("Input tidak boleh kosong");
    } else {
      let newTodo = {
        value: input,
        status: false,
      };

      dispatch(addTodo(newTodo));
      setInput("");
      setError(""); // Reset pesan kesalahan
    }
  };

  return (
    <div>
      <form action="" className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <input
            className="ring-0 pl-4 rounded-2xl shadow-sm border-gray-400 py-1"
            type="text"
            placeholder="Add some task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="text-blue-500 bg-blue-50 px-3 py-1 rounded-2xl"
          >
            + New Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodo;
