import React from "react";
import InputTodo from "../components/inputTodo";
import TodoList from "../components/todoList";

function TodoPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="shadow p-10 rounded-2xl">
        <h1 className="text-center mb-5">Today's Task</h1>
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoPage;
