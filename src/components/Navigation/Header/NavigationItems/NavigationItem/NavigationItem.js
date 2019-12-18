import React from 'react'
import './NavigationItem.css'
const navigationItem=(props)=>(
    <li className='NavigationItem'><a href={props.link}>{props.title}</a></li>
)
export default navigationItem