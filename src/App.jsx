import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Signin from "./page/Signin"
import Signup from "./page/Signup"
import About from "./page/About"
import Profile from "./page/Profile"
import Header from "./components/Header"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/Sign-In" element={<Signin/>}></Route>
         <Route path="/Sign_up" element={<Signup/>}></Route>
         <Route path="/About" element={<About/>}></Route>
         <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
