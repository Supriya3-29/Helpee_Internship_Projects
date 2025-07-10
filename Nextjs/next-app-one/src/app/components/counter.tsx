"use client";
import React, { useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs';

export const Counter = () => {
  // const {isLoaded, userId, sessionId, getToken } = useAuth();
  const {isLoaded, isSignedIn, user} = useUser();

    console.log('Counter');
    const[count, setCount] = useState(0);

    // if (!isLoaded || !userId){
    //   return null;
    // }

    if (!isLoaded || !isSignedIn){
      return null;
    }

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}
