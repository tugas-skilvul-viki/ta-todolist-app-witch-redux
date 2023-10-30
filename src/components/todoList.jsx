import {
  ArrowArcLeft,
  ArrowCircleLeft,
  CheckCircle,
  Pencil,
  Trash,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  getTodo,
  updateTodo,
  updateTodoStatus,
} from "../redux/reducer/todoReducer";
import LoadingComponent from "./loadingComponent";
import PropTypes from "prop-types";

function TodoList() {
  const { isLoading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const [isEdit, setIsEdit] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleStatus = (id, currentStatus) => {
    const newStatus = !currentStatus;
    console.log(newStatus);
    dispatch(updateTodoStatus(id, newStatus));
  };

  const handleEdit = (todo) => {
    setIsEdit(true);
    setEditValue(todo.value);
    setEditItemId(todo.id);
  };

  const handleUpdate = (id, newValue) => {
    dispatch(updateTodo(id, newValue));
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <div className="flex mt-8 items-center text-gray-500 gap-3 mb-5 text-xs cursor-pointer">
        {/* all tab */}
        <div
          className={`tab ${
            filter === "all" ? "active-tab text-blue-600" : ""
          }`}
          onClick={() => handleFilter("all")}
        >
          All
          <span
            className={`tab ml-1 rounded-2xl px-1 text-white ${
              filter === "all" ? "active-tab bg-blue-600" : "bg-slate-400"
            }`}
          >
            {todos.length}
          </span>
        </div>
        {/* active tab */}
        <div
          className={`tab ${
            filter === "active" ? "active-tab text-blue-600" : ""
          }`}
          onClick={() => handleFilter("active")}
        >
          Active
          <span
            className={`tab ml-1 rounded-2xl px-1 text-white ${
              filter === "active" ? "active-tab bg-blue-600" : "bg-slate-400"
            }`}
          >
            {todos.filter((todo) => !todo.checked).length}
          </span>
        </div>
        {/* completed tab */}
        <div
          className={`tab ${
            filter === "completed" ? "active-tab text-blue-600" : ""
          }`}
          onClick={() => handleFilter("completed")}
        >
          Completed
          <span
            className={`tab ml-1 rounded-2xl px-1 text-white ${
              filter === "completed" ? "active-tab bg-blue-600" : "bg-slate-400"
            }`}
          >
            {todos.filter((todo) => todo.checked).length}
          </span>
        </div>
      </div>
      <ul className="flex max-h-56 pr-1 overflow-auto  flex-col gap-2">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          todos
            .filter((todo) => {
              if (filter === "active") {
                return !todo.checked;
              } else if (filter === "completed") {
                return todo.checked;
              }
              return true;
            })
            .map((todo) => (
              <li key={todo.id}>
                <div className="bg-white rounded-md p-3 flex items-center justify-between shadow-sm">
                  <div className="flex gap-1">
                    {isEdit && editItemId === todo.id ? (
                      <div>
                        <input
                          className="border pl-3 rounded-xl"
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        <input
                          onChange={() => handleStatus(todo.id, todo.checked)}
                          type="checkbox"
                          checked={todo.checked}
                        />
                        <p className={todo.checked ? "line-through" : ""}>
                          {todo.value}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex">
                    {isEdit && editItemId === todo.id ? (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleUpdate(todo.id, editValue)}
                        >
                          <CheckCircle
                            className=" text-blue-500 hover:text-blue-600"
                            size={20}
                            weight="fill"
                          />
                        </button>
                        <button onClick={handleCancel}>
                          <ArrowCircleLeft
                            className=" text-orange-400 hover:text-yellow-600"
                            size={20}
                            weight="fill"
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="flex">
                        <div
                          className="cursor-pointer"
                          onClick={() => handleEdit(todo)}
                        >
                          <Pencil
                            className="hover:text-blue-600"
                            size={20}
                            weight="fill"
                          />
                        </div>
                        <div className="cursor-pointer">
                          <Trash
                            onClick={() => handleDelete(todo.id)}
                            className="hover:text-red-600"
                            size={20}
                            weight="fill"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}

// Definisikan PropTypes untuk TodoList
TodoList.propTypes = {
  isLoading: PropTypes.bool,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      checked: PropTypes.bool,
      value: PropTypes.string,
    })
  ),
};

export default TodoList;
