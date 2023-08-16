import React from "react";
import "./styles.css"
import AllPages from "./pages/allRender";
import DisplayLoginPage from "./pages/login";
import { useState } from "react";
import SignUpPagee from "./pages/signup";
import {Routes,Route} from "react-router-dom"


function App() {

let [isLogClck,setislogclick] = useState(false)
  return (
    <div>
      {
        isLogClck ? <AllPages/> : <DisplayLoginPage issetclk={setislogclick} isclk={isLogClck}/>
      }
   <Routes>
    <Route path="/login" element={<DisplayLoginPage/>}/>
    
    <Route/>
   </Routes>
   </div>
    
  );
}
       
export default App;
