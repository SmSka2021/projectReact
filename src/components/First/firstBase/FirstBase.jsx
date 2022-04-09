import React from 'react';
import s from './FirstBase.module.css';




const FirstBase = (props) => {

    let srs = require(`../../../assept/${props.first}/${props.src}`)
    return (
        <div className={s.recept}>
            <div className={s.recept_card}>
                <h3>{props.name}</h3>
                <div className={s.recept_title}>
                    <img className={s.img} src={srs} alt="foto" />
                    <div className={s.recept_item}>
                        <p>{props.recepie}</p>
                        <div>
                        </div>
                    
                            <button onClick={() => props.removeRecepie(props.idd)} className={s.btn}>Удалить</button>
                     </div>                                   
                   </div>
            </div>
        </div>
    );
};

export default FirstBase;