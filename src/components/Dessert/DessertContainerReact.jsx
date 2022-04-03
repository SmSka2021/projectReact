import { connect } from 'react-redux';
import { removeFirstActionCreator, updateFirstActionCreator, updateFirstInputActionCreator } from '../../redux/dessert_reducer';
import { addFirstctionCreator } from '../../redux/dessert_reducer';
import { Dessert } from './Dessert';



let mapStateToProps=(state)=>{
    return {
    state: state.dessertPages,  
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

 
 export const DessertContainerReact = connect(mapStateToProps, mapDispatchToProps)(Dessert)


 