import React from 'react'
import './NavigationItem.css'
import {Link} from 'react-router-dom'
const navigationItem=(props)=>(
    <li className='NavigationItem'><Link to={props.link} onClick={props.show}>{props.title}</Link></li>
)
export default navigationItem