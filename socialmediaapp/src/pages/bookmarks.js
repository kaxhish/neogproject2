import { useContext } from "react"
import React from "react"
import { context } from "../contexts/contexts"
import "../styles.css"
import { AiOutlineHeart } from "react-icons/ai";
import {BsBookmark} from "react-icons/bs"
import {BsFillBookmarkFill} from "react-icons/bs"
import { AiOutlineShareAlt } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file
import { ToastContainer } from 'react-toastify';

export default function BookmarksPage(){
let {isBKPosts,handleRemoveBK}=useContext(context)

    return(
<div>
 {isBKPosts.length === 0 ? (
        <div className="noPostsHeading" style={{color:"blue"}}>No Bookmarks added</div>
      ) : (
isBKPosts.map((postC) => {
          let { id, imgSrc, firstName, lastName, username, content,  likes } = postC;
          let isBKlist=true
          return (
            <div key={id} className="exploreUsers">
             
              <div className="fl-usernameGrid">
                <img src={imgSrc} alt="img1" />
                <div>
                  <div className="exploreFL">{`${firstName} ${lastName}`}</div>
                  <div className="exloreUsername">@{username}</div>
                </div>
              </div>

              <div>
                <div className="exploreContent">{content}</div>
              </div>

              <div className="optionsSocial">
                <div>
                  <AiOutlineHeart />
                  <span>{likes.likeCount}</span>
                </div>
              
                <div>
                {isBKlist ? (
                <BsFillBookmarkFill
                  onClick={() => handleRemoveBK(postC)}
                  style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
                />
              ) : (
                <BsBookmark
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                />
              )}
                </div>
                 <div>
                  <AiOutlineShareAlt />
                
                </div>
                <div></div>
                <div></div>
              </div>
              <ToastContainer/>
            </div>
          );
        }))}
</div>
    )
}