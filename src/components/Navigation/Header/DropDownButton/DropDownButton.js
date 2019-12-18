import React from 'react'
import './DropDownButton.css'
const dropDownButton=(props)=>(
    <div className='DropDownButton' onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>   
)
export default dropDownButton