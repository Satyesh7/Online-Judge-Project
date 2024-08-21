import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Home from "./pages/Home"


export default function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}