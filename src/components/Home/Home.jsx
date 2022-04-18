import React from 'react';
import clas from './Home.module.css'
import { SliderContainerReact } from './Slider/SliderContainer';
import styled  from 'styled-components';


export const Home = ()=> {
return (
    <div className={clas.area}>
      <Text>Сервировка стола</Text>
      <Text2>
      Правильная сервировка – это всегда знак внимания к гостям, способ создать праздничную атмосферу, а также показатель художественного вкуса хозяйки.
      </Text2>
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
const Text2 = styled.h3`
    font-size: 22px;
    text-transform: none;
    letter-spacing: 0.02em;
    color: rgb(8, 8, 58);
    text-align: center;
    font-weight: 400;
`