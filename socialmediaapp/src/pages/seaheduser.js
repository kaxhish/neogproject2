import { useContext } from "react"
import { context } from "../contexts/contexts"
import {Link} from "react-router-dom"
import "../styles.css"

export default function SearchedUser(){
    let {isSearceduser} = useContext(context)
    let {handlesearuserinfo} = useContext(context)

    return (
        <div>
          <div className="fullPage-suggestion">
           
            {isSearceduser.map((usr) => {
           let { id, imgSrc, firstName, lastName, username }=usr
              return (
                <div className="suggestions" key={id}>
                  <div>
                    <img src={imgSrc} alt="img1" />
                  </div>
                  <div className="userInfo">
                    <div className="userFL">{`${firstName} ${lastName}`}</div>
                    <Link to="/userinfo">
                    <div className="username" onClick={() => handlesearuserinfo(usr)}>@{username}</div>
                    </Link>
                   
                  </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      );


   
}