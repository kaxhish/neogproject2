import {posts} from "../db/posts"

export  const fakeFetch=(url) =>{
    return new Promise((resolve,reject) =>{
setTimeout(() =>{
    if(url==="https://example.com/api/usertweets"){
        resolve({
            status:200,
            message:"Success",
            data:posts
        })
    }else{
        reject({
            status:null,
            message:"data not found",
        })
    }
},1000)
    })
}