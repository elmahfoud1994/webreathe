import React from 'react'
import Aux from '../../../hoc/Auxilary'
import { GiPoliceBadge } from "react-icons/gi"
import {FaCheck} from "react-icons/fa"
import {IoMdCloseCircleOutline} from "react-icons/io"
import './NewModuleStatus.css'
//incomplete please take care of responsive in wide scale
const newModuleStatus=(props)=>(
    <Aux>
        <div className="imageHolder">
            <span><GiPoliceBadge/> Form Status</span>
        </div>
        <div className="messageStatus">
            <span style={{color:props.name.trim().length?"green":"red",marginRight:"1%",marginTop:"1%"}}>{props.name.trim().length?<FaCheck/>:<IoMdCloseCircleOutline/>}</span>
            <span>{props.name.trim().length?"Module name is valid":"Please fill the Module Name"}</span>
        </div>
        <div className="messageStatus">
            <span style={{color:props.type.trim().length?"green":"red",marginRight:"1%",marginTop:"1%"}}>{props.type.trim().length?<FaCheck/>:<IoMdCloseCircleOutline/>}</span>
            <span>{props.type.trim().length?"Module Type is valid":"Please fill the Module Type"}</span>
        </div>
        <div className="messageStatus">
            <span style={{color:props.number?"green":"red",marginRight:"1%",marginTop:"1%"}}>{props.number?<FaCheck/>:<IoMdCloseCircleOutline/>}</span>
            <span>{props.number?"Module Number is valid":"Please fill the Module Number"}</span>
        </div>
        <div className="messageStatus">
            <span style={{color:props.description.trim().length?"green":"red",marginRight:"1%",marginTop:"1%"}}>{props.description.trim().length?<FaCheck/>:<IoMdCloseCircleOutline/>}</span>
            <span>{props.description.trim().length?"Module Number is valid":"Please fill the Module Number"}</span>
        </div>
        <div className="messageStatus">
            <span style={{color:props.form2IsValid?"green":"red",marginRight:"1%",marginTop:"1%"}}>{props.form2IsValid?<FaCheck/>:<IoMdCloseCircleOutline/>}</span>
            <span>{props.form2IsValid?"At least one item to monitor is selected":"Please select one criteria to monitor"}</span>
        </div>
       
       
        
        
      
    </Aux>
)
export default newModuleStatus