import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { RiStarSFill } from "react-icons/ri";

const App = () => {

  const [click,setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const clicking = (value:number) => {
    setClick(value);
  }

  const Hovering = (value:number) =>{
    setHover(value);
  }

  // const fillColor = 'text-yellow-200';
  // const nofillColor = 'text-white-200';
  
  // const indexValue = 'index > 0'


  const star = Array(5).fill(0);
  return (
    <>
      <h1 className="text-4xl">Star Rating: </h1>
      <div className="flex text-3xl " >
        <div className="flex">{star.map((_,index) => { 
          const starValue = index +1
          return ( 
          <button 
          key={index}
          type="button" 
          title="starButton" 
          value={click && hover}
          onClick={()=> clicking(starValue)}
          onMouseEnter={()=>Hovering(starValue)}
          onMouseLeave={()=>Hovering(0)}
          className="cursor-pointer"
        >
        <FaStar
        className={starValue <= (hover || click) ? "text-yellow-400" : "text-white-400" }
        />
        {/* <span className="text-yellow-500">
          <FaRegStar/>
        </span> */}
        
        </button>
        ) })} 
        </div>
        
      </div>
      <br /><br />
    </>
  )
}

export default App