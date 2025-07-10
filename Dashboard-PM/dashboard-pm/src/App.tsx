// import React from 'react'
import { Chart } from "./components/Chart";
import { DevAreas } from "./components/Dev-areas";
import { Meetings } from "./components/Meetings";
import { Navbar } from "./components/Navbar";
import { ProfileTasks } from "./components/Profile-tasks";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-[#f5f5f5] p-10">
      <div className="flex flex-row gap-10 bg-white shadow p-8 w-[90%]">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <Navbar />
          <ProfileTasks />
          <Chart />
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-gray-300" />

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <Meetings />
          <DevAreas />
        </div>
      </div>
    </div>
  )
}

export default App;