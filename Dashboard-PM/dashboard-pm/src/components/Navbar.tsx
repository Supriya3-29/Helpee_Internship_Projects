// import React from 'react'
import { IoLogoCodepen } from "react-icons/io"
import { CgProfile } from "react-icons/cg";
// import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center gap-49 " >
        <div className="flex flex-row justify-center gap-2">
            <div title="Logo"><IoLogoCodepen className="w-10 h-10"/></div>
            <div className="flex flex-col">
                <h1 className="font-thing text-lg ">Welcome, Kristin</h1>
                <span className="text-xs font-thin text-[#7e7f81]">Your personal dashboard overview</span>
            </div>
        </div>
        <div className="flex flex-row gap-2 items-center" >
            <div title="Search">
                <input type="text" placeholder="Search" className="rounded-2xl bg-[#d1d4de] p-1 pl-5"/>
            </div>
            <div title="Profile"><CgProfile className="w-8 h-8 " /></div>
        </div>
    </div>
  )
}
