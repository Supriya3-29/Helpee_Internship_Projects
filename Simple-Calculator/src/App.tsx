import { useState } from "react"

const ops = [
  { name: "7", value: "7" },
  { name: "8", value: "8" },
  { name: "9", value: "9" },
  { name: "+", value: "+" },
  { name: "4", value: "4" },
  { name: "5", value: "5" },
  { name: "6", value: "6" },
  { name: "-", value: "-" },
  { name: "1", value: "1" },
  { name: "2", value: "2" },
  { name: "3", value: "3" },
  { name: "X", value: "*" },
  { name: "C", value: "clear" },
  { name: "0", value: "0" },
  { name: ".", value: "." },
  { name: "/", value: "/" },
  { name: "=", value: "equals" },
];
export default function App() {
  const[expression, setExpression] = useState('')

  const handleClick = (val:string) => {
    if (val === "clear") {
      setExpression("");
    } else if (val === "equals") {
      try {
        const result = eval(expression);
        setExpression(result);
      } catch (error) {
        setExpression("Error");
      }
    } 
    else {
      setExpression((prev) => prev + val);
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl">Simple Calculator</h1><br/>
      <div className="border border-gray-400 w-64 mb-4 p-4 text-right text-2xl bg-white">
        {expression || "0"}
      </div>

      <div className="grid grid-cols-4 gap-2 w-64">
        {ops.map((op) => (
          <button
            key={op.name}
            title="buttons"
            onClick={() => handleClick(op.value)}
            className="border border-gray-400 px-4 py-2 text-lg hover:bg-blue-100"
          >
            {op.name}
          </button>
        ))}
      </div>
    </div>
  )
}
