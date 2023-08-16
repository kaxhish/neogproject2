import {Link} from "react-router-dom"
import React from "react"

import "../styles.css"
import SearchBar from './searchbar'
import Profile from "./profile"

export default function UpperBar(){
    return(
        <div className='upperbar'>
             <div className='upperbar-hashIcon' style={{marginLeft:"10pc"}}><span>#HashMedia</span></div>
            <div className='upperbar-searchbar'><SearchBar/></div>
            <Link to="/userprofile">
            <div className='upperbar-profile'><Profile/></div>
            </Link>
        </div>
    )
}