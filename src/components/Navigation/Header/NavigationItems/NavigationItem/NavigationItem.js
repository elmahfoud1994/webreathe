import React from 'react'
import './NavigationItem.css'
//importing an item from the routing library,once clicked trigers the navigation
import {NavLink} from 'react-router-dom'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows a link.

const navigationItem=(props)=>(
    <li className='NavigationItem'><NavLink to={props.link} activeStyle={{color:"white",fontWeight:"bold"}}exact={true}  onClick={props.hide}>{props.title}</NavLink></li>
)
export default navigationItem