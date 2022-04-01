
import { MyPost } from './MyPost';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import { connect } from 'react-redux';



const mapStateToProps=(state)=>{
 
   return {
   posts:state.profilePage.posts, 
   newPostText: state.profilePage.newPostText 
}}
const mapDispatchToProps = (dispatch)=>{
  return {
   updateChange: (postUser)=>{
      let action = updateNewPostTextActionCreator(postUser)    
       dispatch(action)
   } ,
   addpostUser:()=>{
      dispatch(addPostActionCreator())      
   }
  } 
}

export const ReactPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)