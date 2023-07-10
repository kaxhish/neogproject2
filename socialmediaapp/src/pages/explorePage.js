import { fakeFetch } from "../backend/utils/fakeFetchPosts"
import React from "react"
import {useState,useEffect,useContext} from "react"
import "../styles.css"
import {AiOutlineHeart } from "react-icons/ai";
import {BiCommentDetail} from "react-icons/bi"
import { LiaBookmarkSolid} from "react-icons/lia";
import {AiOutlineShareAlt} from "react-icons/ai"
import { likeContext } from "../contexts/likeContext";

export default function ExplorePage(){

    let [isPosts,setIsPosts] = useState([])
let {handleLikes,isClick,handleBM,isBK}= useContext(likeContext)


    let handleFetchedData= async () =>{
let {status,data} = await fakeFetch("https://example.com/api/usertweets")

try{
    if(status===200){
        setIsPosts(data)
    }
}catch(e){
    console.log(e)
}
    }

    useEffect(() =>{
        handleFetchedData()
    },[])


    return( 
        <div>
        <div className="fullPage-explore">
         {isPosts.map((postC) =>{
            let {id,imgSrc,firstName,lastName,username,content,likes,comments} = postC
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
                   <div className="optionsSocial">
                    <div style={{color:isClick ? "red" : ""}} onClick={() => handleLikes(postC)}><AiOutlineHeart/><span>{likes.likeCount}</span></div>
                    <div className="exploreComments"><BiCommentDetail/><span>{comments.length}</span></div>
                    <div><LiaBookmarkSolid style={{color:isBK ? "red" : ""}} onClick={() => handleBM(postC)}/></div>
                    <div><AiOutlineShareAlt/></div>
                    <div></div>
                    <div></div>
                   </div>
                  
                    </div>
                    
            )
            
         })}
          
         </div>
        </div>
    )
}