import React from 'react';
import clas from './Post.module.css'
import { ButtonLike } from './../ButtonLike/ButtonLike';
import Button from './../../../UII/Button/Button';



export const Post = (props) => {

  return (
    <div className={clas.post}>
      <div className={clas.item}>
        <img className={clas.img} src='https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' alt="foto" />
        <h6>{props.message}</h6>
      </div>
      <div className={clas.buttonLine}>
        <ButtonLike />       
      </div>
      
    </div>
  )
}
