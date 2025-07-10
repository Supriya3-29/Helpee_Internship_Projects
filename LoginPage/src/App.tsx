import { useSelector } from "react-redux"
import type { RootState } from "./store/store"
import { Container } from "./components/Container"
import { LoginPage } from "./components/LoginPage";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { fetchData } from "./store/LoginSlice";


const App = () => {
  const user = useSelector((state: RootState)=> state.Login.email);
  console.log("User is ",typeof user);

  return (
    <>
      {/* <Container /> */}
      {/* <Routes>
        <Route path="/" element={!user ? <Container/>  : <Navigate to="/home" />} />
        <Route path="/home" element={user ? < LoginPage/> : <Navigate to="/" />} />
      </Routes> */}
      {user ? <LoginPage /> : <Container/>}
    </>
    
  )
}

export default App
