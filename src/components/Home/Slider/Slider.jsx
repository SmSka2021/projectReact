import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c from './Slider.module.css' 
import uniqid from "uniqid";

export  const Sliders =(props)=> {
return (
  <div className={c.container}>
     <Slider dots={true} infinite={true} speed={1000} slidesToScroll={3} arrows={true} slidesToShow={3} className={c.slider}>
     {props.state.table.map((x) => {
    return <div key={uniqid()} className={c.img_card}>
      <img className={c.img} src={require(`../../../assept/slider/${x.img}`) } alt="table"/>
      <div className={c.card_body}>
        <div className={c.card_title}>{x.title}</div>
        <div className={c.card_text}>{x.text}</div>
      </div>
    </div>
  })}
</Slider>
    </div>

)
      }
   