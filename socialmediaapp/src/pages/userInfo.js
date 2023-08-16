import { useContext } from "react"
import { context } from "../contexts/contexts"
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"
import { AiOutlineShareAlt } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"
import "../styles.css"

export default function UserSearchedFullInfo(){
    let {issercedinfo,issercedpostinfo, handleAddLinkes,isLikedPosts,handleAddBK,isBKPosts,handleRemoveBKpost,handleRemoveLikedpost}=useContext(context)
    return(
        <div>
 {issercedinfo.map((usr) => {
           let { id, imgSrc, firstName, lastName, username,occupation,followers,following,ocuLink }=usr
              return (
                <div>
                <div className="suggestions" key={id}>
                  <div>
                    <img src={imgSrc} alt="img1" style={{borderRadius:"50px",width:"100px",height:"100px"}} />
                  </div>
                  <div className="userInfo">
                    <div className="userFL">{`${firstName} ${lastName}`}</div>
                    <div className="username">@{username}</div>
                    <div style={{marginTop:"10px", display:"flex"}}>
                      <div>followers:<b style={{color:"blue"}}>{followers}</b></div>
                    <div>following:<b style={{color:"blue"}}>{following}</b></div>
                      </div>
                      <div><a href={ocuLink}>{ocuLink}</a> || {occupation}</div>
                  </div>
                
                </div>
                <br/>
                <hr/>
                {issercedpostinfo.map((postC) => {
          let { id, imgSrc, firstName, lastName, username, content, comments, likes } = postC;
          let isLikelist= isLikedPosts.find(item => item.post_id===postC.post_id)
          let isBKlist=isBKPosts.find(item => item.post_id===postC.post_id)
          return (
            <div key={id} className="exploreUsers">
              <div></div>
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
               style={{color:"red",fontWeight:"bold",fontSize:"22px"}}
               onClick={() => handleRemoveLikedpost(postC)}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => handleAddLinkes(postC)}
              style={{fontWeight:"bold",fontSize:"22px"}}
                
              />
            )}
                  <span>{likes.likeCount}</span>
                </div>
               
                <div>
                {isBKlist ? (
              <BsFillBookmarkFill
               style={{color:"red",fontWeight:"bold",fontSize:"22px"}}
               onClick={() => handleRemoveBKpost(postC)}
              />
            ) : (
              <BsBookmark
                onClick={() => handleAddBK(postC)}
              style={{fontWeight:"bold",fontSize:"22px"}}
                
              />
            )}
                </div>
                <div>
                  <AiOutlineShareAlt />
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          );
        })}
                </div>
              );
            })}
        </div>
    )
}