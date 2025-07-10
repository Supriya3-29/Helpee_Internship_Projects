"use client"
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <div>
        <h1 className="text-3xl font-bold">Enter your name </h1>
      </div>
      <form className="flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit}>
        <input 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"  
          placeholder="Type your name..."
          className="border-1 rounded-md p-2 pl-2 "/>
        <button type="submit" className="border-1 rounded-md p-2 w-20  bg-blue-300">Submit</button>
      </form>
    </div>
  );
}
