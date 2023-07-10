
import React from "react"

import "../styles.css"
import SearchBar from './searchbar'
import ChangeThemes from './themes'
import Profile from "./profile"

export default function UpperBar(){
    return(
        <div className='upperbar'>
             <div className='upperbar-hashIcon'><span></span># Hash-Media</div>
            <div className='upperbar-searchbar'>{<SearchBar/>}</div>
            <div className='upperbar-theme'><ChangeThemes/></div>
            <div className='upperbar-profile'><Profile/></div>
        </div>
    )
}