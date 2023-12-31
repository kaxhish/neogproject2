import React, { useState, useEffect, useContext } from "react";
import {posts} from "../backend/db/posts"
import {Link} from "react-router-dom"
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"
import { AiOutlineShareAlt } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"
import "../styles.css"
import { context } from "../contexts/contexts";

export default function HomePage() {
  const [isData, setIsData] = useState(posts);
  const [newPostContent, setNewPostContent] = useState("");
  let {handleAddLinkes,isLikedPosts,handleAddBK,isBKPosts,handlesearuserinfo,handleRemoveBKpost,handleRemoveLikedpost} = useContext(context)

  const [currentUser, setCurrentUser] = useState({
    username: "JohnDoe",
    imgSrc: "https://th.bing.com/th/id/OIP.tdeMTWVrNnzfJNluUki1TwHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
      firstName: "John",
    lastName: "Doe"

  });



  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      imgSrc: currentUser.imgSrc,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      username: currentUser.username,
      content: newPostContent,
      comments: [],
      likes: { likeCount: 0 }
    };

    setIsData((prevData) => [newPost,...prevData]);
    setNewPostContent("");
  };

  return (
    <div>
      <div>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write your post..."
          className="addpostarea"
        />
         <button onClick={handlePost} className="postbtn">Post</button>
       
      </div>
      <div>
        {isData.map((postC) => {
          let { id, imgSrc, firstName, lastName, username, content, comments, likes } = postC;
          let isLikelist= isLikedPosts.find(item => item.post_id===postC.post_id)
          let isBKlist=isBKPosts.find(item => item.post_id===postC.post_id)
          return (
            <div key={id} className="exploreUsers">
              <div className="fl-usernameGrid">
               
                <Link to="/userinfo" onClick={() => handlesearuserinfo(postC)}>
                <img src={imgSrc} alt="img1" />
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
    </div>
  );
}
