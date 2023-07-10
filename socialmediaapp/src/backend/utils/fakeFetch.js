import {users} from "../db/users"

export  const fakeFetch=(url) =>{
    return new Promise((resolve,reject) =>{
setTimeout(() =>{
    if(url==="https://example.com/api/usertweets"){
        resolve({
            status:200,
            message:"Success",
            data:users
        })
    }else{
        reject({
            status:70,
            message:"data not found",
        })
    }
},1000)
    })
}
//console.log(users)
/* let fakefetch=(url) =>{
return new Promise(() =>{
    settimeout((if(url=="https://url"){response({})else{reject({})}}) =>{},2000)
})
}*/