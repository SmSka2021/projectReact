import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Profile } from "./components/Profile/Profile";
import { Routes, Route} from "react-router-dom";
import { Setting } from './components/Setting/Setting';
import { DialogsContainerReact } from './components/Dialogs/DialogsContainerReact';
import { FirstContainerReact } from './components/First/FirstContainerReact';
import { SecondContainerReact } from './components/Second/SecondContainerReact';
import { DessertContainerReact } from './components/Dessert/DessertContainerReact';
import Recipe from './components/Setting/components/Recipe1';
import { Home } from './components/Home/Home';


export const App = (props) => {
  return (   
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">    
              
    <Routes>      
      <Route path="/profile" element={<Profile store = {props.store}/>} />
      <Route path="/dialogs/*" element={<DialogsContainerReact store = {props.store}/>} />
      <Route index path="/home" element={<Home />} />
      <Route path="/dessert" element={<DessertContainerReact store = {props.store}/>} />      
      <Route path="/recipe" element={<Setting />} />  
      <Route path="/recipe/:id" element={<Recipe />} />       
      <Route path="/first" element={<FirstContainerReact store = {props.store}/>} />  
      <Route path="/second" element={<SecondContainerReact store = {props.store}/>} />  
    </Routes>
       
        </div>
      </div>
   
     
  );
};


  
 

    
