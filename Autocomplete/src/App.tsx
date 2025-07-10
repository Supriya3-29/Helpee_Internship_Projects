// import React from 'react'

import { useState } from "react"

const App = () => {
  const contents = ['apple','banana','chiku','dragonfruit','grape','guava','kiwi', 'mango','orange','pomogranate','pineapple', 'strawberry','watermelon']

  const[option,setOption] = useState('');
  const[value, setValue] = useState<string[]>([]);

  const handleChange = (val:string) => {
    setOption(val);

    if (val === '') {
      setValue([]);
      return;
    }

    const filteredVal = contents.filter((op) =>
      op.toLowerCase().includes(val.toLowerCase())
    );
    setValue(filteredVal);

  }

  const handleSelect = (val:string) => {
    setOption(val);
    setValue([]); 
  };

  return (
    <div className="flex flex-col items-center mt-20">
    <div className="mb-4">Enter which fruit you want to search: </div>
    <input 
    type="text" 
    value={option}
    title="search" 
    onChange={(e) => handleChange(e.target.value)}
    className="border border-gray-400 px-4 py-2 w-64"
    placeholder="Search here..."></input>
    
    { value.length > 0 && <div>
      <ul className="border border-gray-400 w-64 mt-1 bg-white ">{value.map((fa,index) => {
        return(
          <li 
          key={index} 
          onClick={() => handleSelect(fa)} 
          className="px-4 py-2 cursor-pointer hover:bg-blue-100">{fa}</li>
        )
      })}</ul>
    </div> 
    }
    </div>
  )
}

export default App
