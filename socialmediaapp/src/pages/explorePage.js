import { fakeFetch } from "../backend/utils/fakeFetchPosts"
import React, { useContext } from "react"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import "../styles.css"
import {AiOutlineHeart } from "react-icons/ai";
import {AiOutlineShareAlt} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import { context } from "../contexts/contexts";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file
import { ToastContainer } from 'react-toastify';
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"


export default function ExplorePage(){

    let [isPosts,setIsPosts] = useState([])
    let {handleAddLinkes,isLikedPosts,handleAddBK,isBKPosts,handlesearuserinfo,handleRemoveBKpost,handleRemoveLikedpost} = useContext(context)



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
            let {_id,imgSrc,firstName,lastName,username,content,likes,comments} = postC

            let isLikelist= isLikedPosts.find(item => item.post_id===postC.post_id)
            let isBKlist=isBKPosts.find(item => item.post_id===postC.post_id)

            return(
                <div key={_id} className="exploreUsers">
                    <div className="fl-usernameGrid">
                      <Link to="/userinfo" onClick={() => handlesearuserinfo(postC)}>
                      <img src={imgSrc} alt="img1"/>
                      </Link>
                    <div onClick={() => handlesearuserinfo(postC)}>
                      <Link to="/userinfo">
                    <div className="exploreFL">{`${firstName} ${lastName}`}</div>
                    <div className="exloreUsername">@{username}</div> 
                    </Link>  
               </div>
                 </div>
                 <div>
                    <div className="exploreContent">{content}</div>
                   </div>
                   <div className="optionsSocial">
                    <div >
                        
                        {isLikelist ? (
              <AiFillHeart
               style={{color:"red",fontWeight:"bold",fontSize:"22px"}}
               onClick={() =>handleRemoveLikedpost(postC)}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => handleAddLinkes(postC)}
              style={{fontWeight:"bold",fontSize:"22px"}}
                
              />
            )}
                        <span>{likes.likeCount }</span></div>
                  
                    <div>
                        
                    </div>
                    <div><AiOutlineShareAlt/></div>
                    <div>{isBKlist ? (
              <BsFillBookmarkFill
               style={{color:"red",fontWeight:"bold",fontSize:"22px"}}
               onClick={() => handleRemoveBKpost(postC)}
              />
            ) : (
              <BsBookmark
                onClick={() => handleAddBK(postC)}
              style={{fontWeight:"bold",fontSize:"22px"}}
                
              />
            )}</div>
                   
                    
                   </div>
                  
                    </div>
                    
            )
            
         })}
          
         </div>
         <ToastContainer/>
        </div>
    )
}