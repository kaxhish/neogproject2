import React, { useState, useEffect } from "react";
import { fakeFetch } from "../backend/utils/fakeFetchPosts";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { LiaBookmarkSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function HomePage() {
  const [isData, setIsData] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [currentUser, setCurrentUser] = useState({
    username: "JohnDoe",
    imgSrc: "path-to-profile-pic",
    firstName: "John",
    lastName: "Doe"
  });

  const handleFetchedData = async () => {
    let { status, data } = await fakeFetch("https://example.com/api/usertweets");

    try {
      if (status === 200) {
        setIsData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleFetchedData();
  }, []);

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

    setIsData((prevData) => [...prevData, newPost]);
    setNewPostContent("");
  };

  return (
    <div>
      <div>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write your post..."
        />
        <div>
          <button onClick={handlePost}>Post</button>
        </div>
      </div>
      <div>
        {isData.map((postC) => {
          let { id, imgSrc, firstName, lastName, username, content, comments, likes } = postC;
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
                  <AiOutlineHeart />
                  <span>{likes.likeCount}</span>
                </div>
                <div className="exploreComments">
                  <BiCommentDetail />
                  <span>{comments.length}</span>
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
        })}
      </div>
    </div>
  );
}
