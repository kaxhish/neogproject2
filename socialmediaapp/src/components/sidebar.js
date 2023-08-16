import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import {AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { LiaBookmarkSolid} from "react-icons/lia";
import "../styles.css"
import { NavLink } from 'react-router-dom'
export default function NavBar(){
    return(
        <div className='navbar'>
            <div><span><AiOutlineHome/></span><NavLink to="/">Home</NavLink></div>
            <div><span><MdOutlineExplore/></span><NavLink to="/explore">Explore</NavLink></div>
            <div><span><LiaBookmarkSolid/></span><NavLink to="/bookmarks">Bookmarks</NavLink></div>
            <div><span><AiOutlineHeart/></span><NavLink to="/like">Liked Posts</NavLink></div>
        </div>
    )
}   