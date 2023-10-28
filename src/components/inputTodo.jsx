import React from "react";

function InputTodo() {
  return (
    <div>
      <form action="" className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <input
            className="ring-0 pl-4 rounded-2xl shadow-sm border-gray-400 py-1"
            type="text"
            placeholder="Add some taks..."
          />
        </div>
        <div>
          <button className="text-blue-500 bg-blue-50 px-3 py-1 rounded-2xl">
            + New Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodo;
