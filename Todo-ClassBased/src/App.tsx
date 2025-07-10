import { Component } from 'react'
// import AddTodo from './components/AddTodo'
import Chart from './components/Chart'
import DisplayTodo from './components/DisplayTodo'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import RootLayout from './layout/RootLayout'
import NotFound from './Pages/NotFound'
import DisplayTodoWrapper from './components/DisplayTodoWrapper'
import AddTodoWrapper from './components/AddTodoWrapper'

export default class App extends Component {
  render() {

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
          <Route index element={<AddTodoWrapper />} />
          <Route path="lists" element={<DisplayTodoWrapper />} />
          <Route path="lists" element={<DisplayTodo />} />
          <Route path="chart" element={<Chart />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        
        )
    )

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <RouterProvider router={router} />
        {/* <Navbar/> */}
        {/* <Row gutter={[24, 24]} align="middle" >
        <Col xs={24} md={16}>
          <AddTodo/>
        </Col> */}
        {/* <Col xs={24} md={8} style={{marginLeft: -20}}>
          <Chart/>
        </Col> */}
        {/* </Row> */}
    
    {/* <DisplayTodo/> */}
    </div>
    )
  }
}
