// import React from 'react'
import { LeftPart } from "./LeftPart"
import { RightPart } from "./RightPart"

export const Container = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-[1.5fr_1fr] border-solid border-10 rounded-2xl border-[#dad5d5] p-15 ">
        <LeftPart />
        
        <RightPart  />
    </div>
  )
}
