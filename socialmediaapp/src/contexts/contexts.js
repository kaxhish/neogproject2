import { createContext,useState } from "react"
import React from "react"
import { toast } from 'react-toastify';
import {users} from "../backend/db/users"
import { posts } from "../backend/db/posts";

export let context = createContext()

export default function ContextComp({children}){

    let [isLikedPosts,setIsLikedPosts] = useState([])
    let [isBKPosts,setisBKPosts] = useState([])
  let [isSearceduser,setsearcheduser]  = useState([])
  let [issercedinfo,setsearchedinfo] = useState([])
  let [issercedpostinfo,setsearcedpostinfo] = useState([])

  

  let handleAddLinkes=(likedPost) =>{
setIsLikedPosts([...isLikedPosts,likedPost])
toast.success("post added to liked posts", {
    position: 'top-right', // Position of the toast
    autoClose: 3000, // Time to auto-close the toast (in milliseconds)
    hideProgressBar: false, // Set to true to hide the progress bar
    closeOnClick: true, // Set to false to not close the toast on click
    pauseOnHover: true, // Set to true to pause the toast on hover
    draggable: true, // Set to true to make the toast draggable
  })
 
  }
let handleAddBK=(bkPost) =>{
setisBKPosts([...isBKPosts,bkPost])
toast.success("post added to Bookamarks", {
  position: 'top-right', // Position of the toast
  autoClose: 3000, // Time to auto-close the toast (in milliseconds)
  hideProgressBar: false, // Set to true to hide the progress bar
  closeOnClick: true, // Set to false to not close the toast on click
  pauseOnHover: true, // Set to true to pause the toast on hover
  draggable: true, // Set to true to make the toast draggable
})
}

let handleRemoveBKpost = (post) => {
  setisBKPosts(isBKPosts.filter(item => item.post_id !== post.post_id));
  toast.info("post removed from Bookamarks", {
    position: 'top-right', // Position of the toast
    autoClose: 3000, // Time to auto-close the toast (in milliseconds)
    hideProgressBar: false, // Set to true to hide the progress bar
    closeOnClick: true, // Set to false to not close the toast on click
    pauseOnHover: true, // Set to true to pause the toast on hover
    draggable: true, // Set to true to make the toast draggable
  })
  // Additional code to update the bookmarks state
};
let handleRemoveLikedpost = (postl) => {
  setIsLikedPosts(isLikedPosts.filter(item => item.post_id !== postl.post_id));
  toast.info("post removed from liked posts", {
    position: 'top-right', // Position of the toast
    autoClose: 3000, // Time to auto-close the toast (in milliseconds)
    hideProgressBar: false, // Set to true to hide the progress bar
    closeOnClick: true, // Set to false to not close the toast on click
    pauseOnHover: true, // Set to true to pause the toast on hover
    draggable: true, // Set to true to make the toast draggable
  })
  // Additional code to update the bookmarks state
};

let handleSearchbar=(searchedUser) =>{
let showuser =users.filter(user => user.username.toLowerCase().includes(searchedUser.toLowerCase()))
setsearcheduser(showuser)
}
let handlesearuserinfo=(userinfod) =>{
  let userinfo=users.filter(user => user.user_id===userinfod.user_id)
  let postinfo=posts.filter(post => post.user_id===userinfod.user_id)
  setsearcedpostinfo(postinfo)
setsearchedinfo(userinfo)

}

    return(
<context.Provider value={{handleRemoveLikedpost,handleRemoveBKpost, handleSearchbar,issercedpostinfo ,issercedinfo,handlesearuserinfo,isSearceduser, handleAddBK,isBKPosts,handleAddLinkes,isLikedPosts}}>
    {children}
</context.Provider>
    )
}