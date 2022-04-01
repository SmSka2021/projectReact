import React, {useState} from 'react';
import clas from './ButtonLike.module.css'


export const ButtonLike = (props) => {

  const [count, setCount] = useState(0)  
  return (
    <div className={clas.btn_like}>
    <p>like{count}</p>
    <button className={clas.btn} onClick={()=>{setCount(count + 1)}}>like Mi</button>
    </div>
  )
}