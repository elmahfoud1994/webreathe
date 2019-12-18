import React from 'react'
import './DropDown.css'
import BackDrop from '../../../ui/BackDrop/BackDrop'
import Aux from '../../../../hoc/Auxilary'
const dropDown=(props)=>{
    let attachedClasses=["DropDown","Close"]
    if(props.show) attachedClasses=["DropDown","Open"]
    return(
        <Aux>
        {props.show?<BackDrop closed={props.clicked} />:null}
        <div className={attachedClasses.join(" ")}>

        </div>
        </Aux>
    )
}
export default dropDown