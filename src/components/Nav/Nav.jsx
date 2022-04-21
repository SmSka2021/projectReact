import React from 'react';
import n from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import home from '../../assept/Group.png'


export const Nav = () => {
  return (
    <nav className={n.nav}>
      <ul>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/home'><img style={{width: 20, height: 20}} src={home} alt="home"/></NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/profile'>Заметки</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/first'>Первые блюда</NavLink></li>      
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/second'>Вторые блюда</NavLink></li>      
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/dessert'>Дессерт</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/recipe'>Поиск</NavLink></li>     
     
           
      </ul>
    </nav>
  )
}
