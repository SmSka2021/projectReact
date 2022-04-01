import React, {useRef} from 'react';
import clas from './MyPost.module.css'
import { Post } from './Posts/Post';


export const MyPost = (props)=> {   
   let inputRef = useRef(null)

   let oNaddpostUser = ()=> {  
   props.addpostUser()
   inputRef.current.value=""
    }
    let oNupdateChange =() => {
         let postUser= inputRef.current.value ;  
        props.updateChange(postUser)
        
    }
    let postArr = props.posts.map((elem, i)=> (<Post key = {i} idd = {elem.idd} message = {elem.message}/>))
    
return (
    <div className={clas.area}>
        <h1>My Post</h1>        
        <textarea ref = {inputRef} onChange = {oNupdateChange} placeholder="message"></textarea>
        <div><button onClick = {oNaddpostUser} className={clas.btn}>Add post</button></div>
        {postArr}      
        </div>
)}