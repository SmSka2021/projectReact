import { combineReducers, createStore } from "redux";
import { profileReducer } from './profile_reducer';
import { dessertReducer } from './dessert_reducer';
import { firstReducer } from './first_reducer';
import { secondReducer } from "./second_reducer";
import { sliderReducer } from './slider_reducer';

let redusers = combineReducers({
  profilePage: profileReducer,   
  dessertPages: dessertReducer,
 firstPages: firstReducer,
 secondPages: secondReducer,
 sliderPages: sliderReducer,
});

 let store = createStore(redusers);
 export default store;
