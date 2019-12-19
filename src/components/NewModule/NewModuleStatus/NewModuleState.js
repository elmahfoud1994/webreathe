import React from 'react'
import Aux from '../../../hoc/Auxilary'
import { GiPoliceBadge } from "react-icons/gi"
import {IoMdCloseCircleOutline} from "react-icons/io"
import './NewModuleStatus.css'
//incomplete please take care of responsive in wide scale
const newModuleStatus=(props)=>(
    <Aux>
        <div className="imageHolder">
            <span><GiPoliceBadge/> Form Status</span>
        </div>
        <div className="messageStatus">
            <span style={{color:"red",marginRight:"1%",marginTop:"1%"}}><IoMdCloseCircleOutline/></span><span>Please fill the Module Name</span>
        </div>
        <div className="messageStatus">
            <span style={{color:"red",marginRight:"1%",marginTop:"1%"}}><IoMdCloseCircleOutline/></span><span>Please fill the Module Type</span>
        </div>
        <div className="messageStatus">
            <span style={{color:"red",marginRight:"1%",marginTop:"1%"}}><IoMdCloseCircleOutline/></span><span>Please fill the Module Type</span>
        </div>
        <div className="messageStatus">
            <span style={{color:"red",marginRight:"1%",marginTop:"1%"}}><IoMdCloseCircleOutline/></span><span>Please fill the Module Number</span>
        </div>
        <div className="messageStatus">
            <span style={{color:"red",marginRight:"1%",marginTop:"1%"}}><IoMdCloseCircleOutline/></span><span>Please select one criteria to monitor</span>
        </div>
       
       
        
        
      
    </Aux>
)
export default newModuleStatus