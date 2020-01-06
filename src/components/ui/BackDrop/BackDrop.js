import React from 'react'
import './BackDrop.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the a background color ,when the dropdown is visible.
const backDrop=(props)=>(
    <div className="BackDrop" onClick={props.closed}>

    </div>
)
export default backDrop