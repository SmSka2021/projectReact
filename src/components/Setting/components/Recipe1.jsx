import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from "styled-components"
import recipe from "./Recipe1.module.css"


const API_KEY = "&apiKey=e69b1318009e443b86a4ecdea961217a";

function correctTxt (str) {
  if(!str) {return '' }
  const searchRegExp1 = "<b>"
  let str1 = str.replaceAll(searchRegExp1, "");
    const searchRegExp = "</b>"
   let str2 =str1.replaceAll(searchRegExp, "");
    if(str2.length < 100){
      return str2
      } else{
        return `${str2.substring(0, 400)}...`
  }
}

  const Recipe =( props) => {  
    const location = useLocation();
    const { data } = location.state; 
    const  [oneRecepie, setOneRecepie] = useState({ results: []})  
       
    useEffect (() => {
         fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${data}&addRecipeInformation=true${API_KEY}`)
        .then(response => response.json())
        .then(res => setOneRecepie(res.results[0]))          
     },[data, setOneRecepie])     
  
  
    return (
        <div className='container'>                      
        <CardOneRecetp >
            <img className={recipe.img} src={oneRecepie.image} alt={oneRecepie.title} />
            <div className={recipe.blockTxT}>
               <h3 className= {recipe.title}>{oneRecepie.title}</h3>
           <p className= {recipe.publisher}>{correctTxt(oneRecepie.summary)}</p>
          <p className= {recipe.website}>Website:<span><a target= "_blank" rel="noopener noreferrer" href={oneRecepie.sourceUrl}>{oneRecepie.sourceUrl}</a></span></p>
        <button className={recipe.button}>
            <Link to="/recipe">Go Home</Link></button>
            </div>          
        </CardOneRecetp>        
    </div>
        )
    
}

export default Recipe;



const CardOneRecetp = styled.div`
  margin: 60px auto;  
  width: 90%;
  height: 75vh;
  display: flex;
  border: 5px dashed blue;
  border-radius: 10px;
  padding: 30px;
}
`