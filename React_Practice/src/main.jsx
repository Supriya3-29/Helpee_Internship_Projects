import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react"
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const anotherELement = "U can go back" 

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', traget: '_blank'},
  'Click me to visit Google',
  anotherELement
)

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
    // reactElement  
)
