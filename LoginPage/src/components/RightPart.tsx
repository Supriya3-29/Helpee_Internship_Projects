// import React from 'react'
import Dashboard from '../assets/images/dashboard.png'

export const RightPart = () => {
  return (
    <div className="bg-blue-600 border-none rounded-lg flex flex-col justify-center items-start pl-15 pb-20 mb-5">
      <br/>
        <h2 className="text-white text-3xl" >Effortlessly manage your team</h2>
        <h2 className="text-white text-3xl">and operations</h2><br />
        <span className="text-white text-md font-thin" >Login to access your CRM dashboard and manage your team</span><br/><br/>
        <img src={Dashboard} width="400" height="300" title="dashboard" className="rounded-lg" />
    </div>
  )
}

