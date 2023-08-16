
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { context } from '../contexts/contexts'

export default function SearchBar(){
    let {handleSearchbar} = useContext(context)
    return(
        <div>
            <div>
                <Link to="/searchuser">
                <input onChange={(event) => handleSearchbar(event.target.value)} type="text" placeholder="search" style={{padding:"6px",width:"30pc",borderRadius:"10px",textAlign:"center",border:"none"}}/>
                </Link>
                </div>
        </div>
    )
}