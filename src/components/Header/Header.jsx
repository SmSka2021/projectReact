import React from 'react';
import s from './Header.module.css'
import 'antd/dist/antd.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_decor} >
                <h1 className={s.h1}>&#9672; </h1>
                <img className={s.img1} src={require('../../assept/eda.gif')} alt="logo_img"/>
                <h1 className={s.h1}>&#9672;</h1>
            </div>

            <h1 className={s.h1}> КУЛИНАРНАЯ КНИГА  </h1>
            <div className={s.header_decor} >
                <h1 className={s.h1}>&#9672;</h1>
                <h1 className={s.h1}>&#9672;</h1>
                <h1 className={s.h1}>&#9672;</h1>
            </div>
        </header>
    )
}