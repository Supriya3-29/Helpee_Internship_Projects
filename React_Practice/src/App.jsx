import { useState } from "react"
import { Chai } from "./components/chai"
import { Greeting } from "./components/Greeting"
import { Counter } from "./components/Counter"
import { Trial } from "./components/trial"
import AddTodo from "./components/addTodo"
import Todos from "./components/Todos"



function App() {
  let [counter, setCounter] = useState(2)

  const username = 'Chai aur code'
  // let counter = 3

  const addValue = () =>{
    counter ++
    console.log("value",counter)
    if (counter >= 10) {
      counter = 10
    }
    setCounter(counter)
  }

  const removeValue = () => {
    counter --
    console.log("value",counter)
    if (counter <= 0) {
      counter = 0
    }
    setCounter(counter)
  }
  return ( 
  <>
    {/* <Chai name='King'/>
    <h2 className="text-4xl">Hello {username}</h2> 
    <br />
    <h2 >Counter value: {counter}</h2>
    
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <br></br>
    <br></br>
    <Chai  name='Sara'/> 
    <br/>
    <Greeting />
    <br/><br/>
    <Counter />
    <br />
    <Trial /> */}
    <AddTodo/>
    <Todos/>
  </>
  )
}

export default App