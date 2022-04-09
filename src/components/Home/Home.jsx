import React from 'react';
import clas from './Home.module.css'
import { SliderContainerReact } from './Slider/SliderContainer';
import styled  from 'styled-components';


export const Home = ()=> {
return (
    <div className={clas.area}>
      <Text>Сервировка стола</Text>
     <SliderContainerReact/>
        </div>
)}
const Text = styled.h2`
    font-size: 35px;
    letter-spacing: 0.05em;
    color: rgb(8, 8, 58);
    text-align: center;
    font-weight: 700;
`