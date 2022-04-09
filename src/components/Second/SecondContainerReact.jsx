import { connect } from 'react-redux';
import { removeSecondActionCreator, updateSecondActionCreator, updateSecondInputActionCreator } from '../../redux/second_reducer';

import { addSecondActionCreator } from '../../redux/second_reducer';
import { Second } from './Second';



let mapStateToProps=(state)=>{

    return {
    state: state.secondPages,
  
 }}
let mapDispatchToProps = (dispatch)=>{
     
  return {
   onNewInputChange: (title)=> {      
  dispatch(updateSecondInputActionCreator(title))
  },
  onNewdMessageChange: (text)=> {      
   dispatch(updateSecondActionCreator(text))
   },

 onSendMessageCreator:()=>{      
     dispatch(addSecondActionCreator())     
 },
  removeRecepie:(idd)=>{ 
    dispatch(removeSecondActionCreator(idd))
  }
 } 
}

 
 export const SecondContainerReact = connect(mapStateToProps, mapDispatchToProps)(Second)


 