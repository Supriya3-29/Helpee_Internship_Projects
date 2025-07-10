// import React from 'react'

import { AddTodo } from "./components/AddTodo"
import { Chart } from "./components/Chart"
import { DisplayTodos } from "./components/DisplayTodos"

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="grid grid-cols-[2fr_1fr] items-center pt-2">
      <AddTodo/>
      <Chart/>
      </div>
    
    <DisplayTodos/>
    </div>
  )
}

export default App
