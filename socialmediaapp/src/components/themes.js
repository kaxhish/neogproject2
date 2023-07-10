import React, { useContext } from "react"
import {BsSun} from "react-icons/bs"
import {CiDark} from "react-icons/ci"
import {useState} from "react"
import { likeContext } from "../contexts/likeContext"

export default function ChangeThemes(){

  let {handleTheme,isTheme} = useContext(likeContext)
    return(
        <div>
       { isTheme ? <CiDark  style={{fontSize:"24px"}}/> : <BsSun style={{fontSize:"24px"}} onClick={() => handleTheme()}/>}
        </div>
    )
}