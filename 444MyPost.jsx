
import React, {useRef} from 'react';
import clas from './MyPost.module.css'
import { Post } from './src/components/Profile/MyPosts/Posts/Post';
import uniqid from "uniqid";
import { updateNewPostTextActionCreator, addPostActionCreator } from './src/redux/profile_reducer';



export const MyPost = (props)=> {
   
let addPost = ()=> {    
       props.dispatch(addPostActionCreator())      
    }
   let inputRef = useRef(null)  
   
    let updateChange =() => {
         let postUser= inputRef.current.value ;  
         let action = updateNewPostTextActionCreator(postUser)     
        props.dispatch (action)
    }   
    let postArr = props.posts.map((elem, i)=> (<Post key = {i} idd = {elem.idd} message = {elem.message}/>))  
return (
    <div className={clas.area}>
        <h1>My Post</h1>        
        <textarea ref = {inputRef} onChange = {updateChange} placeholder="message"></textarea>
        <div><button onClick = {addPost} className={clas.btn}>Add post</button></div>
        {postArr}      
        </div>
)}