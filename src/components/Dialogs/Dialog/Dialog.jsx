import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

 export const Dialog = (props)=> {
    let myPath = "dialogs/" + props.idd
    return (
        <div className={s.item}>         
            <NavLink className={(data) => data.isActive ? s.active : s.item} to={myPath}> {props.name}</NavLink></div>
    )
};

