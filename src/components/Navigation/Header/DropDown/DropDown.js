import React from 'react'
import './DropDown.css'
//importing the components building this component
import BackDrop from '../../../ui/BackDrop/BackDrop'
import Aux from '../../../../hoc/Auxilary'
import NavigationItems from '../NavigationItems/NavigationItems'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component is visble on small devices ,it's a dropdown.
const dropDown=(props)=>{
    let attachedClasses=["DropDown","Close"]
    if(props.show) attachedClasses=["DropDown","Open"]
    return(
        <Aux>
        {props.show?<BackDrop closed={props.clicked} />:null}
        <div className={attachedClasses.join(" ")}>
        		<NavigationItems clicked={props.clicked} />          
        </div>
        </Aux>
    )
}
export default dropDown