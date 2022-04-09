import { connect } from 'react-redux';
import { removeDessertActionCreator, updateDessertActionCreator, updateDessertInputActionCreator } from '../../redux/dessert_reducer';
import { addDessertActionCreator } from '../../redux/dessert_reducer';
import { Dessert } from './Dessert';



let mapStateToProps=(state)=>{
    return {
    state: state.dessertPages,  
 }}
let mapDispatchToProps = (dispatch)=>{     
  return {
   onNewInputChange: (title)=> {      
  dispatch(updateDessertInputActionCreator(title))
  },
  onNewdMessageChange: (text)=> {      
   dispatch(updateDessertActionCreator(text))
   },

 onSendMessageCreator:()=>{      
     dispatch(addDessertActionCreator())     
 },
  removeRecepie:(idd)=>{ 
    dispatch(removeDessertActionCreator(idd))
  }
 } 
}

 
 export const DessertContainerReact = connect(mapStateToProps, mapDispatchToProps)(Dessert)


 