import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import { Dialog } from './Dialog/Dialog';

import uniqid from "uniqid";




export const Dialogs = (props) => {
   
    let textareaRef = useRef(null)
    let messageArr = props.state.messagePages.messages.map((elem, i) => <Message key={uniqid()} textMessage={elem.message} idd={elem.idd}/>);
    let dialogsArr = props.state.profilePage.dialogs.map((elem, i) => <Dialog key= {uniqid()} name={elem.name} idd={elem.idd}/>);
   
    let onSendMessageClick = ()=> {       
        props.onSendMessageCreator() 
        textareaRef.current.value=""    
        }
   let onNewdMessageChange = (e)=> {
       let messNewText= e.target.value;
       props.onNewdMessageChange(messNewText)
    }
    let newMessageBody = props.state.messagePages.messages.newMessageBody

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsArr}
            </div>
            <div className={s.message}>
                <div>{messageArr}</div>
                <div>
                    <div><textarea className={s.textarea} ref = {textareaRef} onChange={onNewdMessageChange} value={newMessageBody} placeholder='Название блюда'></textarea></div>
                    <div><button className={s.btn} onClick={onSendMessageClick}>Send</button> </div>
                </div>
            </div>
        </div>
    )
}