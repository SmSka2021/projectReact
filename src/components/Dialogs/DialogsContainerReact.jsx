
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog_reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
    return {
    state: state,
    
 }}
 let mapDispatchToProps = (dispatch)=>{
     
   return {
    onNewdMessageChange: (body)=> {      
    dispatch(updateNewMessageBodyCreator(body))
     },
    onSendMessageCreator:()=>{      
      dispatch(sendMessageCreator())     
    }
   } 
 }
 
 export const DialogsContainerReact = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


