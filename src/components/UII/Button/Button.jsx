import React from 'react';
import b from "./Button.module.css";

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={b.btn}>
          Добавить рецепт
        </button>
    );
};

export default Button;