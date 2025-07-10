// import React from 'react'
import useTodoStore from "../store/todoStore"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

export const statusArr = ['Select Status','Completed', 'On-Hold', 'In-Process','Yet-To-Start'];
export const priorityArr = ['Select Priority','Low', 'Medium', 'High'];

export const AddTodo = () => {
    const addTodo = useTodoStore((state)=> state.addTask);

    const[todoName,setTodoName]= useState('');
    const[description,setDescription] = useState('');
    const [status, setStatus] = useState(0);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [tags, setTags] = useState("");
    const [priority, setPriority] = useState(0);
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        if (!todoName){
            return alert("Please add a task");
        }
        if (status === 0) {
            return alert("Please select a valid status");
        }
        addTodo({
            id: Math.ceil(Math.random() * 1000000),
            name: todoName,
            description: description,
            status: status,
            tags: tags ? tags.split(",").map((t) => t.trim()) : [],
            priority: priority,
            date: new Date().toDateString()})
        console.log(date)
        console.log("task added");
        setTodoName("");
        setDescription("");
        setStatus(0);
        setTags("");
        setPriority(0);
        setDate("");
    }

    const selectStatus = (s:number) => {
        setStatus(s);
        setOpen1(false);
    }

    const openDropdown1 = () => {
        setOpen1(prev => !prev);
    }

    const openDropdown2 = () => {
        setOpen2(prev => !prev);
    }

    const selectPriority = (s:number) => {
        setPriority(s);
        setOpen2(false);
    }

    
    // const formatDate = (e) => {
    //     // const df = e.taerget.valu;
    //     const [year, month, day] = e.split("-");
    //     const formDate = `${day}-${month}-${year}`;
    //     setDate(formDate);
    // }
  return (
    <div className="flex flex-col items-center pt-2">
        <h1 className="text-3xl font-bold mb-3 text-emarald-600">My Todo List</h1>
        <div className="border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-md bg-white">
            <div className="flex flex-col gap-4">
            {/* Task Name */}
            <input
                type="text"
                value={todoName}
                placeholder="Enter the task"
                onChange={(e)=> setTodoName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {/* Description */}
            <textarea
                value={description}
                placeholder="Write description..."
                onChange={(e)=> setDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:border-blue-400"
            />
            {/* Status */}
            <div className="relative">
                <button
                    value={status}
                    onClick={openDropdown1}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full flex justify-between items-center hover:border-blue-400 focus:outline-none">
                    {statusArr[status]}
                    <RiArrowDropDownLine className="text-2xl" />
                </button>

                {open1 && (
                    <ul className="absolute z-10 w-full border border-gray-300 rounded-md bg-white mt-1 shadow-md">
                        {statusArr.map((fr, index) => (
                    <li
                    key={index}
                    onClick={() => selectStatus(index)}
                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                        index === 0 && 'text-gray-500'
                      }`}>
                        {fr}
                    </li>
                    ))}
                    </ul>
                )}
            </div>
            {/* Tags */}
            <input
                type="text"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full flex justify-between items-center hover:border-blue-400 focus:outline-none"
            />
            {/* Priority */}
            <div className="relative">
                <button
                    value={priority}
                    onClick={openDropdown2}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full flex justify-between items-center hover:border-blue-400 focus:outline-none">
                    {priorityArr[priority]}
                    <RiArrowDropDownLine className="text-2xl" />
                </button>

                {open2 && (
                    <ul className="absolute z-10 w-full border border-gray-300 rounded-md bg-white mt-1 shadow-md">
                        {priorityArr.map((fr, index) => (
                    <li
                    key={index}
                    onClick={() => selectPriority(index)}
                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                        index === 0 && 'text-gray-500'
                      }`}>
                        {fr}
                    </li>
                    ))}
                    </ul>
                )}
            </div>
            {/* Date */}
            {/* <input 
                type="date"
                value={date}
                onChange={(e)=> 
                    {
                    console.log(e.target.value);
                    
                    formatDate(e.target.value)}}
                className="border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center hover:border-blue-400 focus:outline-none"
                /> */}
            </div>
            
            <div className="flex justify-center pt-3">
            <button 
            onClick={()=> handleSubmit()}
            className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition">
                Add
            </button>
            </div>
        </div>
    </div>
  )
}
