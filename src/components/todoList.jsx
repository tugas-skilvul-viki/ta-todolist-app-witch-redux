import { Pencil, Trash } from "@phosphor-icons/react";
import React from "react";

function TodoList() {
  return (
    <div>
      <div className="flex mt-8 items-center text-gray-500 gap-3 mb-5">
        <div className="flex gap-1 text-xs">
          <p>All</p>
          <span className="bg-blue-500 text-white  text-center px-2 rounded-xl ">
            20
          </span>
        </div>
        <div className="flex gap-1 text-xs">
          <p>Active</p>
          <span className="bg-gray-400 text-white  text-center px-2 rounded-xl ">
            20
          </span>
        </div>
        <div className="flex gap-1 text-xs">
          <p>Completed</p>
          <span className="bg-gray-400 text-white  text-center px-2 rounded-xl ">
            20
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        <li>
          <div className="bg-white rounded-md p-3 flex items-center justify-between shadow-sm">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <p className="">Belajar React</p>
            </div>
            <div className="flex">
              <div className=" cursor-pointer ">
                <Pencil
                  className="hover:text-blue-600"
                  size={20}
                  weight="fill"
                />
              </div>
              <div className=" cursor-pointer">
                <Trash className="hover:text-red-600" size={20} weight="fill" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="bg-white rounded-md p-3 flex items-center justify-between shadow-sm">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <p>Belajar Redux</p>
            </div>
            <div className="flex">
              <div>
                <Pencil size={20} color="#525252" weight="fill" />
              </div>
              <div>
                <Trash size={20} color="#525252" weight="fill" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="bg-white rounded-md p-3 flex items-center justify-between shadow-sm">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <p>Belajar Tailwinds</p>
            </div>
            <div className="flex">
              <div className="">
                <Pencil size={20} color="#525252" weight="fill" />
              </div>
              <div>
                <Trash size={20} color="#525252" weight="fill" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
