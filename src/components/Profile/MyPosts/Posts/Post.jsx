import React from 'react';
import clas from './Post.module.css'
import { ButtonLike } from './../ButtonLike/ButtonLike';



export const Post = (props) => {
  return (
    <> 
    <div className={clas.item}>
      <img className={clas.img} src='https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' alt="foto" />
      <div>{props.message}</div>
       </div>    
      <ButtonLike/>
       </>
  )
}
