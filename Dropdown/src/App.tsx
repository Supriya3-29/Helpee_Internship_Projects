import { useState } from 'react'

const App = () => {
  const content = ['Apple', 'Mango', 'Strawberry', 'Pineapple'];

    const[fruit,setFruit] = useState(0)
    const[open,setOpen] = useState(false)

    const selectFruit = (value:number) => {
        setFruit(value);
        setOpen(false);
    }

    const openDropdown = () => {
      setOpen((prev) => !prev);
      console.log('clicked')
    }

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className='flex flex-row items-center'>
      <div className="relative">
        <button 
          type='button' 
          title='selectOption' 
          value={fruit}
          className='border border-gray-400 px-4 py-2 bg-white'
          onClick={()=> openDropdown()}>Select from below
          </button>
  
          {open && (
            <ul className="absolute left-0 right-0 mt-1 border border-gray-400 bg-white shadow">
              {content.map((fr, index) => (
                <li
                  key={index}
                  onClick={() => selectFruit(index)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  {fr}
                </li>
              ))}
            </ul>
          )}
        </div>
                
        <span className="border border-gray-400 px-4 py-2 ml-4">
          {content[fruit]}
        </span>
      </div>
      </div>
    );
  }

export default App
