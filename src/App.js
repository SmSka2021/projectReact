import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Profile } from "./components/Profile/Profile";
import { Routes, Route} from "react-router-dom";
import { News } from './components/News/News';
import { Musik } from "./components/Musik/Musik";
import { Setting } from './components/Setting/Setting';
import { DialogsContainerReact } from './components/Dialogs/DialogsContainerReact';
import { FirstContainerReact } from './components/First/FirstContainerReact';
import { SecondContainerReact } from './components/Second/SecondContainerReact';


export const App = (props) => {
  return (   
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">    
              
    <Routes>      
      <Route path="profile" element={<Profile store = {props.store}/>} />
      <Route path="dialogs/*" element={<DialogsContainerReact store = {props.store}/>} />
      <Route path="news" element={<News />} />
      <Route path="musik" element={<Musik />} />      
      <Route path="setting" element={<Setting />} />   
      <Route path="first" element={<FirstContainerReact store = {props.store}/>} />  
      <Route path="second" element={<SecondContainerReact store = {props.store}/>} />  
    </Routes>
       
        </div>
      </div>
   
     
  );
};


  
 

    
