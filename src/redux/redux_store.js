import { combineReducers, createStore } from "redux";
import { profileReducer } from './profile_reducer';
import { dialogsReducer } from './dialog_reducer';
import { newsReducer } from './news_reducer';
import { dessertReducer } from './dessert_reducer';
import { settingReducer } from './setting_reducer';
import { firstReducer } from './first_reducer';
import { secondReducer } from "./second_reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  messagePages: dialogsReducer,
  newsPages: newsReducer,
  dessertPages: dessertReducer,
 settingPages: settingReducer,
 firstPages: firstReducer,
 secondPages: secondReducer,
});

 let store = createStore(redusers);


 export default store;
