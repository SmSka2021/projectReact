import React from 'react';
import unuqid from "uniqid";
import 'antd/dist/antd.css';
import {CheckCircleTwoTone, MinusCircleTwoTone} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import r from "./Recepies.module.css";
import 'bootstrap/dist/css/bootstrap.css';



export const Recepies = (props) => {

    return (
         <div className='container'>
        <div className='row'>
                {props.recepies.map((el) => {
                    return (
                        <div key={unuqid()} className="col-md-4" style={{marginBottom: "2rem"}}>
                            <div className={r.recipes__box}>
                                <img  src={el.image} alt={el.title} />
                                <div className={r.recipe__text}>
                                    <h5 className={r.recipes__title}>{el.title.length < 20 ? `${el.title}` :  `${el.title.substring(0, 25)}...`}</h5>
                                    <h6 className={r.recipes__subtitle}>Vegetarian:  {el.vegetarian===false? <MinusCircleTwoTone />:<CheckCircleTwoTone />}</h6>
                                    <h6 className={r.recipes__subtitle}>Сooking time {el.readyInMinutes} min</h6>
                                    </div>
                                <button className={r.recipe_buttons} >
                                    <Link className={r.a}
                                    to = {`/recipe/${el.id}`}
                                    state= {{data: `${el.title}`}}>View Recipe</Link></button>

                                <div > 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}