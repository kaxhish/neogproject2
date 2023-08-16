import { useContext } from "react"
import {guestmodePosts} from "../backend/db/guestMode"
import "../styles.css"
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file
import { ToastContainer } from 'react-toastify';
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"
import {AiOutlineHeart } from "react-icons/ai";
import {AiOutlineShareAlt} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import { context } from "../contexts/contexts";
import { userPosts } from "../backend/db/guestMode";

export default function ProfilePage(){
    let {handleAddLinkes,isLikedPosts,handleAddBK,isBKPosts,handlesearuserinfo,handleRemoveBKpost,handleRemoveLikedpost} = useContext(context)
    let {_id,imgSrc,firstName,lastName,username,occupation,ocuLink,followers,following} = userPosts

    return( 
        <div>
            <div style={{display:"flex",marginBlock:"30px"}}>
<div style={{marginInlineEnd:"20px"}}>
    <img src={imgSrc} alt="1igh" style={{borderRadius:"50px",width:"100px",height:"110px"}}/>
</div>
<div>
    <div>{firstName} {lastName}</div>
    <div>{username}</div>
    <div>{occupation}</div>
    <div><a href={ocuLink}>{ocuLink}</a></div>
    <div>{followers}followers {following}following</div>
</div>
            </div>
        <div className="fullPage-explore">
         {guestmodePosts.map((postC) =>{
            let {_id,imgSrc,firstName,lastName,username,content,likes} = postC

            let isLikelist= isLikedPosts.find(item => item.post_id===postC.post_id)
            let isBKlist=isBKPosts.find(item => item.post_id===postC.post_id)

            return(
                <div key={_id} className="exploreUsers">
                    <div className="fl-usernameGrid">
                     
                      <img src={imgSrc} alt="img1"/>
                     
                    <div>
                     
                    <div className="exploreFL">{`${firstName} ${lastName}`}</div>
                    <div className="exloreUsername">@{username}</div> 
                    
               </div>   </div>
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
            )}   <span>{likes.likeCount }</span></div>
                  
            <div>
                
            </div>
           
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
    )}</div>  <div><AiOutlineShareAlt/></div></div>
                  
    </div>
    
)

})}

</div>
<ToastContainer/>
</div>
)
}