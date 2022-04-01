import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, state } from './redux/state';


export let rendNew = ()=> {
    ReactDOM.render( 
  <React.StrictMode>
    <App addPost={addPost} posts = {state.profilePage.posts} dialogs={state.profilePage.dialogs} messages={state.messagePages.messages}/>
  </React.StrictMode>,
 
  document.getElementById('root')
);

}



reportWebVitals();


