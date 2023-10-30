import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/reducer/todoReducer";
import toast, { ToastBar, Toaster, useToaster } from "react-hot-toast";
import "../assets/css/index.css";

function InputTodo(props) {
  const [input, setInput] = useState("");
  const { isLoading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    if (input === "") {
      toast.error("Please entry data !");
    } else {
      let newTodo = {
        value: input,
        status: false,
      };

      const promise = dispatch(addTodo(newTodo));

      toast.promise(promise, {
        loading: "Saving...",
        success: <p>Todo added successfully!</p>,
        error: <p>Failed to add todo.</p>,
      });

      setInput("");
    }
  };

  return (
    <div>
      <form action="" className="form flex gap-4 items-center">
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
            className="btn-add text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-2xl"
          >
            + New Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodo;
