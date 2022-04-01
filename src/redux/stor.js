import { v4 as uuid } from "uuid";
import { rendNew } from "..";
import { profileReducer } from './profile_reducer';
import { dialogsReducer } from './dialog_reducer';
import { newsReducer } from './news_reducer';
import { musicReducer } from './music_reducer';
import { settingReducer } from './setting_reducer';

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
    this.state.newsPages = newsReducer(this.state.newsPages, action)
    this.state.musicPages = musicReducer(this.state.musicPages, action)
    this.state.settingPages = settingReducer(this.state.settingPages, action)
  
      rendNew(this.state);
      },
 
  subscribe(observer) {
    this.rendNew = observer;
  },
};
