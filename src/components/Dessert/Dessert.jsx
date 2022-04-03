import React from 'react';
import n from './../First/First.module.css'
import FirstBase from '../First/firstBase/FirstBase';
import Button from './../UII/Button/Button';
import Input from './../UII/Input/Input';



export const Dessert= (props) => {
    let addFirstRecepie = (e) => {
        e.preventDefault()
        if (newMessageBody1 && newMessageBody2) {
            props.onSendMessageCreator()
        }
        else {
            alert("Для добавления вашего рецепта необходимо заполнить форму")
        }
    }
let removeRecepie=(idd)=>{
    props.removeRecepie(idd)
}
    let firstNewChangeInput = (e) => {
        let inputNewText = e.target.value;
        props.onNewInputChange(inputNewText)
    }
    let firstNewChange = (e) => {
        let messNewText = e.target.value;
        props.onNewdMessageChange(messNewText)
    }

    let newMessageBody1 = props.state.newMessageBody1
    let newMessageBody2 = props.state.newMessageBody2
    let first = "dessert"

      let arrFirst = props.state.first
    return (
        <div className={n.mus}>
            <h2>Дессерт</h2>
            <div className={n.forma}>
                <form>
                    <Input value={newMessageBody1} type="text" placeholder='Название блюда'
                        onChange={firstNewChangeInput} />
                    <Button onClick={addFirstRecepie}></Button>

                    <textarea onChange={firstNewChange} value={newMessageBody2} placeholder='Рецепт'></textarea>

                </form>
            </div>
            {arrFirst.map((el) => <FirstBase first={first} removeRecepie = {removeRecepie} name={el.name} recepie={el.recepie} src= {el.src} key={el.idd} idd={el.idd}/>)}
        </div>
    )
}

