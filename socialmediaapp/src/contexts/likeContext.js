import { createContext,useState } from "react"
import React from "react"

export let likeContext = createContext()

export default function LikeContextComp({children}){
    let [likedPosts,setLikedPosts] = useState([])
    let [isClick,setisclick]=useState(false)
    let [markedPosts,setMarked] = useState([])
    let [isBK,setisBM] = useState(false)
    let [isLogClick,setIsLogClick] = useState(false)
    let [isSignDisplay,setIsDisplay] = useState(false)
    let [isSignClose,setIsSignClose] = useState(false)
    let [isTheme,setIsTheme] = useState(false)

    let handleLikes=(postItem) =>{
        setisclick(!isClick)
       setLikedPosts([...likedPosts,postItem])
      
    }
    let handleBM=(postBM) =>{
        setisBM(!isBK)
        setMarked([...markedPosts,postBM])
    }

    let handleLogined=() =>{
setIsLogClick(true)
    }

    let handleSIgnDisplay=() =>{
        setIsDisplay(!isSignDisplay)
    }

    let handleSignClose=() =>{
        setIsSignClose(!isSignClose)
    }

    let  handleTheme=() =>{
        setIsTheme(!isTheme)
    }

    return(
<likeContext.Provider value={{handleLikes,likedPosts,isTheme,isClick,handleTheme,handleBM,isBK,markedPosts,handleLogined,isLogClick,handleSIgnDisplay,handleSignClose,isSignClose, isSignDisplay}}>
    {children}
</likeContext.Provider>
    )
}