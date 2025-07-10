import React, { useEffect, useState } from 'react'

export const Trial = () => {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data=>setUser(data))
    },[])
  return (
    <div>
        <h1>User List - </h1>
        <ul>
            {user.map((u)=> <li key={u.id}>{u.name}</li>)}
        </ul>
    </div>
  )
}
