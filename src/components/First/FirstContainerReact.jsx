import { connect } from 'react-redux';
import { removeFirstActionCreator, updateFirstActionCreator, updateFirstInputActionCreator } from '../../redux/first_reducer';
import { First } from './First';
import { addFirstctionCreator } from './../../redux/first_reducer';



let mapStateToProps=(state)=>{

    return {
    state: state.firstPages,
  
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

 
 export const FirstContainerReact = connect(mapStateToProps, mapDispatchToProps)(First)


 