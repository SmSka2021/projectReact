import { connect } from 'react-redux';
import { removeFirstActionCreator, updateFirstActionCreator, updateFirstInputActionCreator } from '../../redux/second_reducer';

import { addFirstctionCreator } from '../../redux/second_reducer';
import { Second } from './Second';



let mapStateToProps=(state)=>{

    return {
    state: state.secondPages,
  
 }}
let mapDispatchToProps = (dispatch)=>{
     
  return {
   onNewInputChange: (title)=> {      
  dispatch(updateFirstInputActionCreator(title))
  },
  onNewdMessageChange: (text)=> {      
   dispatch(updateFirstActionCreator(text))
   },

 onSendMessageCreator:()=>{      
     dispatch(addFirstctionCreator())     
 },
  removeRecepie:(idd)=>{ 
    dispatch(removeFirstActionCreator(idd))
  }
 } 
}

 
 export const SecondContainerReact = connect(mapStateToProps, mapDispatchToProps)(Second)


 