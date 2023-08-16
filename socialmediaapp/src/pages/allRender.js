import React, { useContext } from "react";
import NavBar from "../components/sidebar";
import UpperBar from "../components/navabar";
import HomePage from "./home.js";
import ExplorePage from "./explorePage"
import SuggestPage from "./suggetions";
import {Routes,Route} from "react-router-dom"
import "../styles.css"
import LikePage from "./likePage";
import BookmarksPage from "./bookmarks";
import SearchBar from "../components/searchbar";
import SearchedUser from "./seaheduser";
import UserSearchedFullInfo from "./userInfo";
import ProfilePage from "./profilePage";
import SignUpPagee from "./signup";
import DisplayLoginPage from "./login";


export default function AllPages(){
    return(
        <div className="fullPage">
        <div className="firstSection-fullPage"><UpperBar/></div>
        <div className="secondSection-fullPage">
  
  
      <NavBar/> 
      
      <Routes>
       
        <Route path="/" element={<HomePage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
       <Route path="/like" element={<LikePage/>}/>
       <Route path="/bookmarks" element={<BookmarksPage/>}/>
       <Route path="/searchuser" element={<SearchedUser/>}/>
       <Route path="/userinfo" element={<UserSearchedFullInfo/>}/>
       <Route path="/userprofile" element={<ProfilePage/>}/>
      </Routes>
  
      <SuggestPage/>
      </div>
      </div>
    )
}