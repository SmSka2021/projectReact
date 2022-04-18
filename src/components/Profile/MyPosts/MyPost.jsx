import React, {useRef} from 'react';
import clas from './MyPost.module.css'
import { Post } from './Posts/Post';
import uniqid from "uniqid";


export const MyPost = (props)=> {   
   let inputRef = useRef(null)

  
   let oNaddpostUser = (e)=> {  
    e.preventDefault()
    if(inputRef.current.value){
        props.addpostUser()
   inputRef.current.value=""
    }  else {
        alert("Для добавления текста необходимо заполнить поле")
    }
   
    }
    let oNupdateChange =() => {
         let postUser= inputRef.current.value ;  
        props.updateChange(postUser)
        
    }
    let postArr = props.posts.map((elem)=> (<Post key = {uniqid()} idd = {elem.idd} message = {elem.message}/>))
    
return (
    <div className={clas.area}>             
        <textarea ref = {inputRef} onChange = {oNupdateChange} placeholder="Добавьте заметку"></textarea>
        <div><button onClick = {oNaddpostUser} className={clas.btn}>Добавить</button></div>
        {postArr}      
        </div>
)}