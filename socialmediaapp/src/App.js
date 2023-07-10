import React, { useContext } from "react";
import "./styles.css"
import { likeContext } from "./contexts/likeContext";
import AllPages from "./pages/allRender";
import Login from "./pages/loginPage"
import {Routes,Route} from "react-router-dom"
import Signup from "./pages/signuPage"



function App() {

let {isLogClick,isTheme} = useContext(likeContext)
  return (
    <div>
    <div>
   {isLogClick ? <AllPages className={`fullPage-explore ${isTheme ? "dark" : ""}`}/> : <Login/>}
   </div>
   <Routes>
<Route path="/sign" element={<Signup/>}/>
   </Routes>
   </div>
    
  );
}
       
export default App;
