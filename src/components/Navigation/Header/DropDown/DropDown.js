import React from 'react'
import './DropDown.css'
import BackDrop from '../../../ui/BackDrop/BackDrop'
import Aux from '../../../../hoc/Auxilary'
import NavigationItems from '../NavigationItems/NavigationItems'
const dropDown=(props)=>{
    let attachedClasses=["DropDown","Close"]
    if(props.show) attachedClasses=["DropDown","Open"]
    return(
        <Aux>
        {props.show?<BackDrop closed={props.clicked} />:null}
        <div className={attachedClasses.join(" ")}>
        		<NavigationItems add={props.add} />          
        </div>
        </Aux>
    )
}
export default dropDown