import { combineReducers, createStore } from "redux";
import { profileReducer } from './profile_reducer';
import { dialogsReducer } from './dialog_reducer';
import { newsReducer } from './news_reducer';
import { musicReducer } from './music_reducer';
import { settingReducer } from './setting_reducer';
import { firstReducer } from './first_reducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  messagePages: dialogsReducer,
  newsPages: newsReducer,
  musicPages: musicReducer,
 settingPages: settingReducer,
 firstPages: firstReducer,
});

 let store = createStore(redusers);


 export default store;
