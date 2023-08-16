import { useContext } from "react"
import React from "react"
import { context } from "../contexts/contexts"
import "../styles.css"
import { AiOutlineHeart } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi";
import { LiaBookmarkSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function LikePage(){
const { isLikedPosts, handleAddLinkes,handleRemoveLikedpost } = useContext(context);



    return(
<div>
{isLikedPosts.length === 0 ? (
        <div className="noPostsHeading" style={{color:"blue"}}>No Liked Posts added</div>
      ) : (isLikedPosts.map((postC) => {
          let { id, imgSrc, firstName, lastName, username, content, comments, likes } = postC;
          let isLikelist=true
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
                {isLikelist ? (
                <AiFillHeart
                  onClick={() => handleRemoveLikedpost(postC)}
                  style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
                />
              ) : (
                <AiOutlineHeart
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                />
              )}
                </div>
                
                <div>
                  <LiaBookmarkSolid />
                </div>
                 <div>
                  <AiOutlineShareAlt />
                </div>
                <div></div>
                <div></div>
              </div>

            </div>
          );
        }))}
</div>
    )
}