import React, { useState, useEffect } from "react";
import clas from './Setting.module.css'
import { Form } from "./components/Form";
import { Recepies } from './components/Recepies';
import { Outlet } from "react-router-dom";


const API_KEY = "&apiKey=e69b1318009e443b86a4ecdea961217a";


export const Setting =()=> {

    useEffect(()=>{
        const json = localStorage.getItem("recipes")
        const recipes = JSON.parse(json);
        setState( recipes || ({
          results: [],
        }));
      }, [])  
      
 const json = localStorage.getItem("recipes")
    const recipes = JSON.parse(json);

  const [state, setState] = useState( recipes || ({
      results: [],
    }));
    

  const getRecipe =((e)=>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&number=21&addRecipeInformation=true${API_KEY}`)
 .then(response => response.json())
 .then(json=>{
   setState({ results: json.results })
   localStorage.setItem("recipes", JSON.stringify({ results: json.results }))
     }) 
  })
  
  
    return (
      <div className={clas.App}>     
      <Outlet/> 
        <Form getRecipe={getRecipe} />
        <Recepies recepies={state.results} />
      </div>
    )
  }
