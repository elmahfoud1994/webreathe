import React from 'react'
import './NavigationItem.css'
const navigationItem=(props)=>(
    <li className='NavigationItem'><a href={props.link} onClick={props.show}>{props.title}</a></li>
)
export default navigationItem