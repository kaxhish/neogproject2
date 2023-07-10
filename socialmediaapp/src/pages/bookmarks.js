
import React from "react"
import { useContext } from "react"
import { likeContext } from "../contexts/likeContext"

export default function LikedPosts({postes}){

  let {markedPosts,isBK}=useContext(likeContext)

  return(
    <div>
      <div className="fullPage-explore">
         { markedPosts.length <=0 ? <div>no liked posts</div> : isBK ? markedPosts.map((item) =>{
            let {id,imgSrc,firstName,lastName,username,content} = item
            return(
                <div key={id} className="exploreUsers">
                    <div className="fl-usernameGrid">
                    <img src={imgSrc} alt="img1"/>
                    <div>
                    <div className="exploreFL">{`${firstName} ${lastName}`}</div>
                    <div className="exloreUsername">@{username}</div>   
               </div>
                 </div>
                 <div>
                    <div className="exploreContent">{content}</div>
                   </div>
                    </div>       
            )
         }) : "" } 
         </div>
     
    </div>
  )
}