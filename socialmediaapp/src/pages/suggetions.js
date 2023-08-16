import React, { useState, useEffect } from "react";
import { fakeFetch } from "../backend/utils/fakeFetch";
import "../styles.css";
import {Link} from "react-router-dom"
import { useContext } from "react"
import { context } from "../contexts/contexts"

export default function SuggestPage() {
  const [isSuggestData, setIsSuggestData] = useState([]);
 
  let {handlesearuserinfo} = useContext(context)

 

  const handleFetchedData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/usertweets");
      if (status === 200) {
        setIsSuggestData(data);
      
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleFetchedData();
  }, []);

  const handleToggleFollow = (userId) => {
    setIsSuggestData((prevData) => {
      return prevData.map((usr) => {
        if (usr.id === userId) {
          return { ...usr, isFollowing: !usr.isFollowing };
        }
        return usr;
      });
    });
  };


  return (
    <div>
      <div className="fullPage-suggestion">
        <h1>Suggestions For you</h1>
        {isSuggestData.map((usr) => {
       let { id, imgSrc, firstName, lastName, username, password, isFollowing }=usr
          return (
           
            <div className="suggestions" key={id}>
               
              <div>
              <Link to="/userinfo" onClick={() => handlesearuserinfo(usr)}>
                <img src={imgSrc} alt="img1" />
                </Link>
              </div>
              
              <div className="userInfo" onClick={() => handlesearuserinfo(usr)}>
              <Link to="/userinfo">
                <div className="userFL">{`${firstName} ${lastName}`}</div>
                <div className="username">@{username}</div>
                </Link>
              </div>
              <div>
                <button onClick={() => handleToggleFollow(id)}>
                {isFollowing ? "Unfollow" : "Follow"}
                </button>
              </div>
             
            </div>
         
          );
        })}
      </div>
    </div>
  );
}
