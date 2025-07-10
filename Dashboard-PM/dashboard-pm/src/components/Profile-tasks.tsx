// import React from 'react'
import { IoIosRefresh } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { CiTrophy } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTimer } from "react-icons/md";
import { FaFigma, FaTrello, FaSlack } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";

export const ProfileTasks = () => {
    return (
        <div className="flex flex-row m-5 gap-4">
            {/* Profile */}
            <div title="profile" className="flex flex-col gap-15 p-5 pr-5 w-2xs rounded-2xl shadow-xl">
                <div className="flex flex-row justify-between">
                    <h4>Profile</h4>
                    <span><IoIosRefresh /></span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <span><CgProfile className="w-8 h-8 " /></span>
                    <h1>Kristin Watson</h1>
                    <span className="text-xs font-semibold text-[#7e7f81]">Design Manager</span>
                </div>
                <div className="flex flex-row justify-between gap-2 ">
                    <div className="flex flex-row gap-1 items-center  p-2 rounded-2xl shadow">
                        <span><LuUsersRound color="orange" /></span>
                        <h6>11</h6>
                    </div>
                    <div className="flex flex-row gap-1 items-center  p-2 rounded-2xl shadow">
                        <span><TiTick className="bg-orange-400 rounded-3xl" color="white" /></span>
                        <h6>56</h6>
                    </div>
                    <div className="flex flex-row gap-1 items-center  p-2 rounded-2xl shadow">
                        <span><CiTrophy color="orange" /></span>
                        <h6>12</h6>
                    </div>
                </div>
            </div>
            {/* Tasks  */}
            <div title="tasks" >
                <div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        {/* Prioritized */}
                        <div title="prioritized task" className="flex flex-col gap-15 p-5 rounded-2xl shadow-lg bg-gradient-to-tr from-pink-200 to-orange-200 ">
                            <div className="flex flex-row justify-between items-center gap-10">
                                <div className="flex flex-col ">
                                    <h4>Prioritized</h4>
                                    <h4>tasks</h4>
                                </div>
                                <span><MdOutlineTimer className="bg-white-100"/></span>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <h1 className="text-3xl">83%</h1>
                                <span>Avg.Completed</span>
                            </div>
                        </div>
                        {/* Additional  */}
                        <div title="additional task" className="flex flex-col gap-15 p-5 rounded-2xl shadow-lg bg-gradient-to-tr from-blue-200 to-green-200">
                            <div className="flex flex-row justify-between items-center gap-10">
                                <div className="flex flex-col ">
                                    <h4 >Additional</h4>
                                    <h4>tasks</h4>
                                </div>
                                {/* <div className="bg-white-500"> */}
                                <span><TiTick  /></span>
                                {/* </div> */}
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <h1 className="text-3xl">56%</h1>
                                <span>Avg.Completed</span>
                            </div>
                        </div>
                    </div>
                    {/* Trackers */}
                    <div title="Trackers" className="flex flex-row p-5 rounded-2xl shadow-lg bg-gradient-to-br gap-5 bg-gray-200 mt-2">
                        <div className="flex flex-col ">
                            <h1 className="font-light text-lg">Trackers connected</h1>
                            <span className="text-xs font-semibold text-[#7e7f81]">3 active connections</span>
                        </div>
                        <div className="flex flex-row items-center gap-5"> 
                            <div className="flex justify-center items-center  ">
                                <div className="flex">
                                    <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow -mr-4">
                                        <FaFigma size={12} color="#a259ff" />
                                    </div>
                                    <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow -mr-4">
                                        <FaTrello size={12} color="#0079bf" />
                                    </div>
                                    <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow">
                                        <FaSlack size={12} color="#611f69" />
                                    </div>
                                </div>
                            </div>
                            <h1><BsThreeDots /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
