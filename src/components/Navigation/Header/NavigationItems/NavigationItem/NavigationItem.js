import React from 'react'
import './NavigationItem.css'
import {NavLink} from 'react-router-dom'
const navigationItem=(props)=>(
    <li className='NavigationItem'><NavLink to={props.link} exact={true}  onClick={props.hide}>{props.title}</NavLink></li>
)
export default navigationItem