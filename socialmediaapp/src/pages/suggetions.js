import React, { useState, useEffect } from "react";
import { fakeFetch } from "../backend/utils/fakeFetch";
import "../styles.css";

export default function SuggestPage() {
  const [isSuggestData, setIsSuggestData] = useState([]);
  const [followStatus, setFollowStatus] = useState({});

  useEffect(() => {
    handleFetchedData();
  }, []);

  const handleFetchedData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/usertweets");
      if (status === 200) {
        setIsSuggestData(data);
        // Initialize the follow status for each user to false
        const initialFollowStatus = {};
        data.forEach(({ id }) => {
          initialFollowStatus[id] = false;
        });
        setFollowStatus(initialFollowStatus);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFollowToggle = (id) => {
    setFollowStatus((prevFollowStatus) => ({
      ...prevFollowStatus,
      [id]: !prevFollowStatus[id],
    }));
  };

  return (
    <div>
      <div className="fullPage-suggestion">
        <h1>Suggestions For you</h1>
        {isSuggestData.map(({ id, imgSrc, firstName, lastName, username, password }) => {
          const isFollow = followStatus[id] || false;
          return (
            <div className="suggestions" key={id}>
              <div>
                <img src={imgSrc} alt="img1" />
              </div>
              <div className="userInfo">
                <div className="userFL">{`${firstName} ${lastName}`}</div>
                <div className="username">@{username}</div>
              </div>
              <div>
                <button onClick={() => handleFollowToggle(id)}>
                  {isFollow ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
