import React from 'react'
import './DropDownButton.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component is visble on small devices ,it's a button once clicked it shows the dropdown.
const dropDownButton=(props)=>(
    <div className='DropDownButton' onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>   
)
export default dropDownButton