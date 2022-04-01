import React from 'react';
import i from "./Input.module.css"

const Input = (props) => {
    return (
        <input {...props} className={i.input} />
    );
};

export default Input;