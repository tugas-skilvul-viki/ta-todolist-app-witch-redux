import React from "react";
import InputTodo from "../components/inputTodo";
import TodoList from "../components/todoList";
import "../assets/css/index.css";
function TodoPage() {
  return (
    <div className="flex flex-col justify-center items-center  text-gray-600">
      <video autoPlay muted loop className="background-video">
        <source src="/src/assets/video/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-center mb-10 mt-20">
        <h1 className="text-3xl font-bold">
          Every Task Brings You Closer To Success !
        </h1>
        <p>Small steps lead to big accomplishments.</p>
      </div>
      <div className="shadow-xl mx-10 min-h-[455px] p-10 rounded-2xl bg-gray-50">
        <h1 className="text-center mb-5 font-bold text-xl">Today's Task</h1>
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoPage;
