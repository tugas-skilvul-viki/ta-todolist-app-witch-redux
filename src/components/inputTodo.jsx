import React from "react";

function InputTodo() {
  return (
    <div>
      <form action="" className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <input
            className="border pl-2 rounded-md border-gray-400 "
            type="text"
            placeholder="Task"
          />
          <input className="border" type="text" placeholder="Description" />
        </div>
        <div>
          <button className="text-blue-500 bg-blue-50 px-3 py-1 rounded-md">
            + New Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodo;
