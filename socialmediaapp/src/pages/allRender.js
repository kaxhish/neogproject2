import React, { useContext } from "react";
import NavBar from "../components/sidebar";
import UpperBar from "../components/navabar";
import HomePage from "./home.js";
import ExplorePage from "./explorePage"
import SuggestPage from "./suggetions";
import {Routes,Route} from "react-router-dom"
import "../styles.css"
import LikedPosts from "./likedPosts";
import BookmarkedPosts from "./bookmarks";

export default function AllPages(){
    return(
        <div className="fullPage">
        <div className="firstSection-fullPage"><UpperBar/></div>
        <div className="secondSection-fullPage">
  
  
      <NavBar/> 
      
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/like" element={<LikedPosts/>}/>
        <Route path="/bookmarks" element={<BookmarkedPosts/>}/>
      </Routes>
  
      <SuggestPage/>
      </div>
      </div>
    )
}