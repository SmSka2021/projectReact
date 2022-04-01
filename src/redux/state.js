import { v4 as uuid } from "uuid";
import { rendNew } from "..";
import { profileReducer } from './profile_reducer';
import { dialogsReducer } from './dialog_reducer';

export let store = {
  state: {
    profilePage: {
      posts: [
        { idd: uuid, message: "Hello. My name is Anna" },
        { idd: uuid, message: "Hi. I am Toma" },
        { idd: uuid, message: "Ok. I from UN" },
      ],
      newPostText: "",
      dialogs: [
        { idd: uuid, name: "Andry" },
        { idd: uuid, name: "Ann" },
        { idd: uuid, name: "Nicol" },
        { idd: uuid, name: "Serg" },
        { idd: uuid, name: "Oleg" },
      ],

    },
    messagePages: {
      messages: [
        { idd: uuid, message: "Hello" },
        { idd: uuid, message: "How are your?" },
        { idd: uuid, message: "I am OK. And you?" },
        { idd: uuid, message: "Good" },
        { idd: uuid, message: "By" },
      ],
     newMessageBody: '',
    },
  },
  rendNew() {
    console.log("State changed");
  },
  getState(){
    return this.state
  },

  dispatch(action){
    this.state.profilePage = profileReducer(this.state.profilePage, action)
    this.state.messagePages = dialogsReducer(this.state.messagePages, action)
    this.state.newsPages = dialogsReducer(this.state.newsPages, action)
    this.state.musicPages = dialogsReducer(this.state.musicPages, action)
    this.state.settingPages = dialogsReducer(this.state.settingPages, action)
    
    if(action.type === 'ADD-POST'){
      let mess = { idd: uuid, message: this.state.profilePage.newPostText,};
      this.state.profilePage.posts.push(mess);
      rendNew(this.state);
    } else if (action.type === 'UPDATE-NEW-POST-CHANGE'){
      this.state.profilePage.newPostText = action.newText;
      rendNew(this.state);
    } else if(action.type=== 'UPDATE-NEW-MESSAGE-BODY'){
      this.state.messagePages.newMessageBody = action.messNewText;     
      rendNew(this.state);
    } else if(action.type=== 'SEND-MESSAGE'){     
     let newMes = {idd: uuid, message: this.state.messagePages.newMessageBody}
     this.state.messagePages.newMessageBody = '';    
     this.state.messagePages.messages.push(newMes)        
      rendNew(this.state);
    }

  },
  addPost() {
    let mess = {
      idd: uuid,
      message: this.state.profilePage.newPostText,
    };
    this.state.profilePage.posts.push(mess);
    rendNew(this.state);
  },
  updateNewPostChange(newText) {
    this.state.profilePage.newPostText = newText;
    rendNew(this.state);
  },
  subscribe(observer) {
    this.rendNew = observer;
  },
  sendMessageCreator (){
    ({type:"SEND-MESSAGE"})},
  updateNewMessageBodyCreator(body){
    ({type:"UPDATE-NEW-MESSAGE-BODY", messNewText: body})
  } 
};
