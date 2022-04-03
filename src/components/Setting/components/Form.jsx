import React from 'react';
import f from "./Form.module.css"

export const Form = (props) => {

    return (
        <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
            <input className={f.form__input} type="text"name="recipeName" />
            <button className={f.form__button}>Search</button>
        </form>
    )
}