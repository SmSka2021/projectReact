import React from 'react';
import s from './FirstBase.module.css';
import r from '../../../assept/first/1.jpg';

const FirstBase = (props) => {   
    return (
        <div className={s.recept}>
            <div className={s.recept_card}>
                 <h3>{props.name}</h3>
                <div className={s.recept_title}>                   
                    <img className={s.img} src={r} alt="foto1" />
                     <div className={s.recept_item}>
                    <p>{props.recepie}</p>
                    <div> 
                </div>
               <button className={s.btn}>Удалить</button></div>
                </div>
            </div>
            </div>
            );
};

            export default FirstBase;