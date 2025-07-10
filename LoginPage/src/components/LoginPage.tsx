// import React from 'react'
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
// import { setUser, fetchData } from '../store/LoginSlice';
// import  { LeftPart } from "./LeftPart"

export const LoginPage = () => {
    const user = useSelector((state: RootState)=> state.Login.email);
    const data = useSelector((state: RootState)=> state.Login.data);
    
    // if(data.Login.isLoading)
  return (
    <>
        <div >Welcome {user}</div><br/><br/>
        <div>
          <ul className="flex flex-col border-solid border-1 gap-2">
            {data?.map?.((item) => 
            <li key={item.id} className="flex flex-row gap-3 border-solid border-1">
              <li>{item.email}</li>
              <li>{item.name}</li>
              <li>{item.phone}</li>
            </li>
            )}
          </ul>
        </div>
    </>
  )
}
