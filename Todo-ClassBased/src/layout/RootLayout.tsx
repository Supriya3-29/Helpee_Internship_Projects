import  { Component, Suspense } from 'react'

import { Outlet } from 'react-router-dom'
import React from 'react'

const Navbar = React.lazy(()=> import ("../components/Navbar"));

export default class RootLayout extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
        </Suspense>
        
        <Outlet/>
      </div>
    )
  }
}
