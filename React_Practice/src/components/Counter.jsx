import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [counter, setCount] = useState(0);

    useEffect(()=>{
        console.log("Count value is: ",counter)
    },[counter])

    let increment = () =>{
        setCount(counter+1)
    }
  return (
    <>
    <div>Counter value : {counter}</div>
    <button onClick={increment}>Click here</button>
    </>
  )
}
