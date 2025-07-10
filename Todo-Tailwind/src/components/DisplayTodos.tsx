// import React from 'react'
import useTodoStore from "../store/todoStore"
import { MdDeleteOutline } from "react-icons/md";
import type { Task } from "../store/todoStore";
import { statusArr } from "./AddTodo";
import { priorityArr } from "./AddTodo";
// import { Task } from '../store/todoStore';

export const DisplayTodos = () => {
    // const tasks = useTodoStore((state) => state.tasks) ;
    // const removeTask = useTodoStore((state) => state.removeTask);
    const { tasks, removeTask}=useTodoStore();

    return (
        <div className="flex flex-col items-center mt-5 w-full">
          
          <h2 className="text-2xl font-semibold mb-6">Tasks</h2>
    
          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {tasks.map((task: Task) => (
              <div
                key={task.id}
                className="border p-4 rounded shadow bg-white flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">{task.name}</h3>
                  <p className="text-gray-600 mb-2">{task.description}</p>
    
                  {/* Tags */}
                  {task.tags && task.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {task.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
    
                  <p className="text-sm text-gray-500">
                    Status:{" "}
                    <span className="font-semibold">{statusArr[task.status]}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Priority:{" "}
                    <span className="font-semibold">
                      {priorityArr[task.priority]}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {" "}
                    <span className="font-semibold">
                      {task.date}
                    </span>
                  </p>

                </div>
    
                <button
                  title="Delete"
                  onClick={() => removeTask(task.id)}
                  className="text-red-500 hover:text-red-700 text-xl self-end mt-4"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            ))}
          </div>
    
          {/* Empty state */}
          {tasks.length === 0 && (
            <p className="text-gray-500 mt-10">No tasks found.</p>
          )}
        </div>
      );
    };