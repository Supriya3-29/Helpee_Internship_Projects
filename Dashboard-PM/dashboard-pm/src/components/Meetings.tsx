// import React from 'react'
import { SlCalender } from "react-icons/sl";
import zoom_logo from "../assets/photos/zoom.png"
import Gmeet_logo from "../assets/photos/Gmeet.jpeg"
import { MdArrowOutward } from "react-icons/md";

export const Meetings = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center font-normal text-xl">
        <h1>My meetings</h1>
        <div><SlCalender /></div>
      </div>
      <div className="pt-10">
        <div className="flex flex-row gap-15 justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light text-[#7e7f81]">Tue, 11 Jul </span>
            <span className="font-semibold text-sm">08:15 am</span>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="font-light">Quick Daily Meeting</h3>
          <div className="flex flex-row items-center gap-1">
            <img src={zoom_logo} alt="Zoom Logo" className="w-6 h-5" />
            <h3 className="text-sm font-light text-[#7e7f81]">Zoom</h3>
          </div>
          </div>
          <div><MdArrowOutward /></div>
        </div>

        <div className="h-[1px] w-full bg-gray-300 mt-3 mb-3" />

        <div className="flex flex-row gap-15 justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light text-[#7e7f81]">Tue, 11 Jul </span>
            <span className="font-semibold text-sm">09:30 am</span>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="font-light">John san Onboarding </h3>
          <div className="flex flex-row items-center gap-1">
            <img src={Gmeet_logo} alt="Zoom Logo" className="w-5 h-5" />
            <h3 className="text-sm font-light text-[#7e7f81]">Google Meet</h3>
          </div>
          </div>
          <div><MdArrowOutward /></div>
        </div>

        <div className="h-[1px] w-full bg-gray-300 mt-3 mb-3" />

        <div className="flex flex-row gap-15 justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light text-[#7e7f81]">Tue, 12 Jul </span>
            <span className="font-semibold text-sm">02:30 am</span>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="font-light">Call with a New Team</h3>
          <div className="flex flex-row items-center gap-1">
            <img src={Gmeet_logo} alt="Zoom Logo" className="w-5 h-5" />
            <h3 className="text-sm font-light text-[#7e7f81]">Google Meet</h3>
          </div>
          </div>
          <div><MdArrowOutward /></div>
        </div>

        <div className="h-[1px] w-full bg-gray-300 mt-3 mb-3" />

        <div className="flex flex-row gap-15 justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light text-[#7e7f81]">Tue, 15 Jul </span>
            <span className="font-semibold text-sm">04:00 am</span>
          </div>
          <div className="flex flex-col gap-1">
          <h3 className="font-light">Lead Designers Event</h3>
          <div className="flex flex-row items-center gap-1">
            <img src={zoom_logo} alt="Zoom Logo" className="w-6 h-5" />
            <h3 className="text-sm font-light text-[#7e7f81]">Zoom</h3>
          </div>
          </div>
          <div><MdArrowOutward /></div>
        </div>
      </div>
      <div className="text-sm font-light text-[#7e7f81] text-center mt-5">See all meetings &gt; </div>
    </div>
  )
}
