import React, { useEffect } from 'react'

export const Greeting = () => {
    useEffect(()=>{
        console.log('Component rendered');
    },[2])
  return (
    <div>Greeting</div>
  )
}
